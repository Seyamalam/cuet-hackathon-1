
import { useState, useEffect, useCallback } from "react";
import { BarChart3, ExternalLink, Gauge, TrendingUp, RefreshCw, AlertTriangle, Download, Database, Cpu, HardDrive, Clock, Activity, Zap, Server, CheckCircle, XCircle } from "lucide-react";

interface MetricsPanelProps {
  prometheusUrl: string;
  grafanaUrl: string;
}

interface PrometheusResult {
  metric: Record<string, string>;
  value: [number, string];
}

interface MetricCard {
  name: string;
  value: string;
  unit: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

interface EndpointMetric {
  path: string;
  method: string;
  requests: number;
  avgLatency: number;
  errorRate: number;
}

interface ServiceStatus {
  name: string;
  status: "up" | "down" | "unknown";
  lastCheck: string;
}

async function queryPrometheus(prometheusUrl: string, query: string): Promise<PrometheusResult[]> {
  try {
    const response = await fetch(`${prometheusUrl}/api/v1/query?query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.data?.result || [];
  } catch (error) {
    console.error("Prometheus query failed:", query, error);
    return [];
  }
}

export function MetricsPanel({ prometheusUrl, grafanaUrl }: MetricsPanelProps) {
  const [metrics, setMetrics] = useState<MetricCard[]>([]);
  const [endpointMetrics, setEndpointMetrics] = useState<EndpointMetric[]>([]);
  const [serviceStatus, setServiceStatus] = useState<ServiceStatus[]>([]);
  const [systemMetrics, setSystemMetrics] = useState<MetricCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchMetrics = useCallback(async () => {
    setLoading(true);
    try {
      // Primary metrics
      const [totalReq, reqRate, avgLatency, errorReq, activeDown, s3Ops, p95Latency, p99Latency] = await Promise.all([
        queryPrometheus(prometheusUrl, 'sum(http_requests_total)'),
        queryPrometheus(prometheusUrl, 'sum(rate(http_requests_total[5m]))'),
        queryPrometheus(prometheusUrl, 'sum(rate(http_request_duration_seconds_sum[5m])) / sum(rate(http_request_duration_seconds_count[5m]))'),
        queryPrometheus(prometheusUrl, 'sum(http_requests_total{status=~"4..|5.."}) or vector(0)'),
        queryPrometheus(prometheusUrl, 'active_downloads'),
        queryPrometheus(prometheusUrl, 'sum(s3_operations_total)'),
        queryPrometheus(prometheusUrl, 'histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))'),
        queryPrometheus(prometheusUrl, 'histogram_quantile(0.99, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))'),
      ]);

      const totalReqValue = parseFloat(totalReq[0]?.value[1] || "0");
      const rateValue = parseFloat(reqRate[0]?.value[1] || "0");
      const latencyValue = parseFloat(avgLatency[0]?.value[1] || "0");
      const errorCount = parseFloat(errorReq[0]?.value[1] || "0");
      const errorRate = totalReqValue > 0 ? ((errorCount / totalReqValue) * 100) : 0;
      const p95Value = parseFloat(p95Latency[0]?.value[1] || "0");
      const p99Value = parseFloat(p99Latency[0]?.value[1] || "0");

      setMetrics([
        { name: "Total Requests", value: totalReqValue.toLocaleString(), unit: "", icon: TrendingUp, color: "text-blue-400", bgColor: "bg-blue-500/10" },
        { name: "Request Rate", value: rateValue.toFixed(2), unit: "req/s", icon: Zap, color: "text-green-400", bgColor: "bg-green-500/10" },
        { name: "Avg Latency", value: isNaN(latencyValue) ? "0" : (latencyValue * 1000).toFixed(1), unit: "ms", icon: Clock, color: "text-yellow-400", bgColor: "bg-yellow-500/10" },
        { name: "P95 Latency", value: isNaN(p95Value) ? "0" : (p95Value * 1000).toFixed(1), unit: "ms", icon: Gauge, color: "text-orange-400", bgColor: "bg-orange-500/10" },
        { name: "P99 Latency", value: isNaN(p99Value) ? "0" : (p99Value * 1000).toFixed(1), unit: "ms", icon: Gauge, color: "text-red-400", bgColor: "bg-red-500/10" },
        { name: "Error Rate", value: errorRate.toFixed(2), unit: "%", icon: AlertTriangle, color: errorRate > 5 ? "text-red-400" : "text-green-400", bgColor: errorRate > 5 ? "bg-red-500/10" : "bg-green-500/10" },
        { name: "Active Downloads", value: activeDown[0]?.value[1] || "0", unit: "", icon: Download, color: "text-purple-400", bgColor: "bg-purple-500/10" },
        { name: "S3 Operations", value: parseInt(s3Ops[0]?.value[1] || "0").toLocaleString(), unit: "", icon: Database, color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
      ]);

      // Endpoint breakdown
      const endpointData = await queryPrometheus(prometheusUrl, 'sum by (path, method) (http_requests_total)');
      const endpointLatency = await queryPrometheus(prometheusUrl, 'sum by (path) (rate(http_request_duration_seconds_sum[5m])) / sum by (path) (rate(http_request_duration_seconds_count[5m]))');
      
      const latencyMap: Record<string, number> = {};
      endpointLatency.forEach(r => {
        latencyMap[r.metric.path] = parseFloat(r.value[1]) * 1000;
      });

      const endpoints: EndpointMetric[] = endpointData
        .filter(r => r.metric.path && !r.metric.path.includes('metrics'))
        .map(r => ({
          path: r.metric.path,
          method: r.metric.method || "GET",
          requests: parseInt(r.value[1]),
          avgLatency: latencyMap[r.metric.path] || 0,
          errorRate: 0,
        }))
        .sort((a, b) => b.requests - a.requests)
        .slice(0, 8);
      
      setEndpointMetrics(endpoints);

      // System metrics
      const [cpuUsage, memUsage, heapUsed, heapTotal, eventLoopLag] = await Promise.all([
        queryPrometheus(prometheusUrl, 'rate(process_cpu_seconds_total[5m]) * 100'),
        queryPrometheus(prometheusUrl, 'process_resident_memory_bytes / 1024 / 1024'),
        queryPrometheus(prometheusUrl, 'nodejs_heap_size_used_bytes / 1024 / 1024'),
        queryPrometheus(prometheusUrl, 'nodejs_heap_size_total_bytes / 1024 / 1024'),
        queryPrometheus(prometheusUrl, 'nodejs_eventloop_lag_seconds * 1000'),
      ]);

      setSystemMetrics([
        { name: "CPU Usage", value: parseFloat(cpuUsage[0]?.value[1] || "0").toFixed(1), unit: "%", icon: Cpu, color: "text-blue-400", bgColor: "bg-blue-500/10" },
        { name: "Memory", value: parseFloat(memUsage[0]?.value[1] || "0").toFixed(0), unit: "MB", icon: HardDrive, color: "text-purple-400", bgColor: "bg-purple-500/10" },
        { name: "Heap Used", value: parseFloat(heapUsed[0]?.value[1] || "0").toFixed(0), unit: "MB", icon: Database, color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
        { name: "Heap Total", value: parseFloat(heapTotal[0]?.value[1] || "0").toFixed(0), unit: "MB", icon: Database, color: "text-slate-400", bgColor: "bg-slate-500/10" },
        { name: "Event Loop Lag", value: parseFloat(eventLoopLag[0]?.value[1] || "0").toFixed(2), unit: "ms", icon: Activity, color: "text-yellow-400", bgColor: "bg-yellow-500/10" },
      ]);

      // Service status from Prometheus targets
      const targets = await queryPrometheus(prometheusUrl, 'up');
      const services: ServiceStatus[] = targets.map(t => ({
        name: t.metric.job || "unknown",
        status: t.value[1] === "1" ? "up" : "down",
        lastCheck: new Date().toLocaleTimeString(),
      }));
      setServiceStatus(services);

      setLastUpdated(new Date());
    } catch (error) {
      console.error("Failed to fetch metrics:", error);
    } finally {
      setLoading(false);
    }
  }, [prometheusUrl]);

  useEffect(() => {
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 5000);
    return () => clearInterval(interval);
  }, [fetchMetrics]);

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-cyan-400" />
          <h2 className="text-lg font-semibold">Performance Metrics</h2>
          {loading && <RefreshCw className="w-4 h-4 text-slate-400 animate-spin" />}
        </div>
        <div className="flex items-center gap-4">
          {lastUpdated && (
            <span className="text-xs text-slate-500">
              Updated: {lastUpdated.toLocaleTimeString()}
            </span>
          )}
          <button onClick={fetchMetrics} className="text-slate-400 hover:text-white p-1" title="Refresh">
            <RefreshCw className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            <a href={prometheusUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300">
              Prometheus <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-600">|</span>
            <a href={grafanaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300">
              Grafana <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-6">
        {metrics.map((metric) => (
          <div key={metric.name} className={`${metric.bgColor} rounded-lg p-3 border border-slate-700/50`}>
            <div className="flex items-center gap-1.5 mb-1">
              <metric.icon className={`w-3.5 h-3.5 ${metric.color}`} />
              <span className="text-xs text-slate-400 truncate">{metric.name}</span>
            </div>
            <div className={`text-lg font-bold ${metric.color}`}>
              {metric.value}
              {metric.unit && <span className="text-xs font-normal text-slate-500 ml-1">{metric.unit}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Endpoint Breakdown */}
        <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Server className="w-4 h-4 text-blue-400" />
            Endpoint Breakdown
          </h3>
          {endpointMetrics.length === 0 ? (
            <p className="text-slate-500 text-sm">No endpoint data yet</p>
          ) : (
            <div className="space-y-2">
              {endpointMetrics.map((ep, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-700/50 last:border-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={`text-xs font-mono px-1.5 py-0.5 rounded ${
                      ep.method === "POST" ? "bg-green-600/30 text-green-400" : 
                      ep.method === "GET" ? "bg-blue-600/30 text-blue-400" : "bg-slate-600/30 text-slate-400"
                    }`}>
                      {ep.method}
                    </span>
                    <span className="text-sm text-slate-300 truncate font-mono">{ep.path}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-slate-400">{ep.requests.toLocaleString()} req</span>
                    <span className="text-yellow-400">{ep.avgLatency.toFixed(1)}ms</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Service Status + System Metrics */}
        <div className="space-y-4">
          {/* Service Status */}
          <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4 text-green-400" />
              Service Status
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {serviceStatus.map((svc, i) => (
                <div key={i} className="flex items-center justify-between bg-slate-800/50 rounded px-3 py-2">
                  <span className="text-sm text-slate-300">{svc.name}</span>
                  {svc.status === "up" ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-400" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* System Metrics */}
          <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-400" />
              System Resources
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {systemMetrics.map((metric, i) => (
                <div key={i} className={`${metric.bgColor} rounded px-3 py-2`}>
                  <div className="flex items-center gap-1 mb-0.5">
                    <metric.icon className={`w-3 h-3 ${metric.color}`} />
                    <span className="text-xs text-slate-500">{metric.name}</span>
                  </div>
                  <span className={`text-sm font-semibold ${metric.color}`}>
                    {metric.value} <span className="text-xs font-normal text-slate-500">{metric.unit}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
        <a href={`${prometheusUrl}/graph?g0.expr=up&g0.tab=0`} target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 hover:bg-slate-700/50 rounded-lg p-3 flex items-center gap-2 text-sm transition-colors">
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          Service Health
        </a>
        <a href={`${prometheusUrl}/graph?g0.expr=rate(http_requests_total[5m])&g0.tab=0`} target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 hover:bg-slate-700/50 rounded-lg p-3 flex items-center gap-2 text-sm transition-colors">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          Request Rate
        </a>
        <a href={`${prometheusUrl}/graph?g0.expr=histogram_quantile(0.95,%20sum(rate(http_request_duration_seconds_bucket[5m]))%20by%20(le))&g0.tab=0`} target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 hover:bg-slate-700/50 rounded-lg p-3 flex items-center gap-2 text-sm transition-colors">
          <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
          P95 Latency
        </a>
        <a href={`${grafanaUrl}/d/delineate/delineate-dashboard`} target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 hover:bg-slate-700/50 rounded-lg p-3 flex items-center gap-2 text-sm transition-colors">
          <span className="w-2 h-2 rounded-full bg-purple-400"></span>
          Full Dashboard
        </a>
      </div>
    </div>
  );
}
