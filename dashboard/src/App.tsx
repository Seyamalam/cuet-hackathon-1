import { useState, useCallback } from "react";
import { Activity, Github, ExternalLink, Gauge, Bug, Radar, FileDown, BarChart3 } from "lucide-react";
import {
  HealthStatus,
  DownloadJobList,
  TraceViewer,
  ErrorList,
  MetricsPanel,
  ErrorBoundary,
  AdvancedTraceViewer,
  SentryErrorsPanel,
  PerformanceMetricsPanel,
} from "./components";
import { usePolling } from "./hooks";
import { apiClient, DownloadJob, HealthResponse } from "./api";

// Configuration
const JAEGER_URL = import.meta.env.VITE_JAEGER_URL || "/jaeger";
const PROMETHEUS_URL =
  import.meta.env.VITE_PROMETHEUS_URL || "/prometheus";
const GRAFANA_URL = import.meta.env.VITE_GRAFANA_URL || "http://localhost:3001";

type TabType = "overview" | "traces" | "errors" | "metrics" | "downloads";

function AppContent() {
  const [jobs, setJobs] = useState<DownloadJob[]>([]);
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [selectedTraceId, setSelectedTraceId] = useState<string | null>(null);

  // Poll health status
  const healthFetcher = useCallback(() => apiClient.getHealth(), []);
  const {
    data: health,
    error: healthError,
    loading: healthLoading,
    lastUpdated,
  } = usePolling<HealthResponse>(healthFetcher, 5000);

  const handleJobCreated = (job: DownloadJob) => {
    setJobs((prev) => [job, ...prev]);
  };

  const handleTraceClick = (traceId: string) => {
    setSelectedTraceId(traceId);
    setActiveTab("traces");
  };

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: "overview", label: "Overview", icon: <Gauge className="w-4 h-4" /> },
    { id: "traces", label: "Traces", icon: <Radar className="w-4 h-4" /> },
    { id: "errors", label: "Errors", icon: <Bug className="w-4 h-4" /> },
    { id: "metrics", label: "Metrics", icon: <BarChart3 className="w-4 h-4" /> },
    { id: "downloads", label: "Downloads", icon: <FileDown className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Delineate Dashboard
              </h1>
              <p className="text-xs text-slate-400">
                Full-Stack Observability Platform
              </p>
            </div>
          </div>
          
          {/* System Status */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 rounded-lg">
              <span
                className={`w-2 h-2 rounded-full ${
                  health?.status === "healthy"
                    ? "bg-green-400 animate-pulse"
                    : "bg-red-400"
                }`}
              ></span>
              <span className="text-sm text-slate-300">
                {health?.status === "healthy"
                  ? "All Systems Operational"
                  : "Issues Detected"}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <a
                href={`${JAEGER_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
              >
                Jaeger <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={`${GRAFANA_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
              >
                Grafana <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="/api/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
              >
                API Docs <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/Seyamalam/cuet-hackathon-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="max-w-[1600px] mx-auto px-4">
          <nav className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "text-blue-400 border-blue-400 bg-blue-500/10"
                    : "text-slate-400 border-transparent hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-4 py-6">
        {/* Status Banner */}
        <div className="mb-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-lg">
                🏆 CUET Hackathon 2025 - Challenge 4
              </h2>
              <p className="text-sm text-slate-400">
                Complete Observability Stack: Sentry Error Tracking • OpenTelemetry Distributed Tracing • Jaeger Visualization • Prometheus Metrics
              </p>
            </div>
            {lastUpdated && (
              <div className="text-xs text-slate-500">
                Last updated: {new Date(lastUpdated).toLocaleTimeString()}
              </div>
            )}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">System Status</span>
                  <Activity className="w-5 h-5 text-blue-400" />
                </div>
                <p className={`text-2xl font-bold mt-2 ${health?.status === "healthy" ? "text-green-400" : "text-red-400"}`}>
                  {health?.status === "healthy" ? "Healthy" : "Unhealthy"}
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Active Jobs</span>
                  <FileDown className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-2xl font-bold mt-2 text-white">{jobs.length}</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Storage</span>
                  <Gauge className="w-5 h-5 text-green-400" />
                </div>
                <p className={`text-2xl font-bold mt-2 ${health?.checks?.storage === "ok" ? "text-green-400" : "text-red-400"}`}>
                  {health?.checks?.storage === "ok" ? "OK" : "Error"}
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Tracing</span>
                  <Radar className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-2xl font-bold mt-2 text-green-400">Active</p>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Health Status */}
              <HealthStatus
                health={health}
                loading={healthLoading}
                error={healthError}
                lastUpdated={lastUpdated}
              />

              {/* Error Tracking */}
              <ErrorList />
            </div>

            {/* Performance Metrics */}
            <PerformanceMetricsPanel />

            {/* Basic Trace Viewer */}
            <TraceViewer jaegerUrl={JAEGER_URL} />
          </div>
        )}

        {activeTab === "traces" && (
          <div className="space-y-6">
            <AdvancedTraceViewer
              jaegerUrl={JAEGER_URL}
              initialTraceId={selectedTraceId || undefined}
            />
          </div>
        )}

        {activeTab === "errors" && (
          <div className="space-y-6">
            <SentryErrorsPanel />
            <ErrorList />
          </div>
        )}

        {activeTab === "metrics" && (
          <div className="space-y-6">
            <PerformanceMetricsPanel />
            <MetricsPanel
              prometheusUrl={PROMETHEUS_URL}
              grafanaUrl={GRAFANA_URL}
            />
          </div>
        )}

        {activeTab === "downloads" && (
          <div className="space-y-6">
            <DownloadJobList 
              jobs={jobs} 
              onJobCreated={handleJobCreated}
              onTraceClick={handleTraceClick}
            />
          </div>
        )}

        {/* Trace Correlation Info - Show only on overview */}
        {activeTab === "overview" && (
          <div className="mt-6 bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Radar className="w-5 h-5 text-cyan-400" />
              Distributed Trace Correlation
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              This dashboard automatically correlates traces between frontend and
              backend using W3C Trace Context:
            </p>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <div className="text-green-400">// Frontend creates trace context</div>
              <div className="text-slate-300">
                traceparent: 00-<span className="text-blue-400">abc123def456...</span>-<span className="text-purple-400">7890abcd</span>-01
              </div>
              <div className="text-slate-300 mt-3">
                <span className="text-green-400">// Headers propagated to backend</span>
              </div>
              <div className="text-slate-300">
                x-trace-id: <span className="text-blue-400">abc123def456...</span>
              </div>
              <div className="text-slate-300">
                x-span-id: <span className="text-purple-400">7890abcd</span>
              </div>
              <div className="text-slate-300 mt-3">
                <span className="text-green-400">// Sentry errors tagged with trace ID</span>
              </div>
              <div className="text-slate-300">
                Sentry.setContext("trace", {"{"} trace_id: "<span className="text-blue-400">abc123def456...</span>" {"}"});
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 mt-12">
        <div className="max-w-[1600px] mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-semibold">Delineate Hackathon Challenge — CUET Fest 2025</p>
              <p className="text-sm text-slate-400 mt-1">
                Built with React, Vite, OpenTelemetry, Sentry, Jaeger, Prometheus & Grafana
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                OpenTelemetry
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                Sentry
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Jaeger
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                Prometheus
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
}

export default App;
