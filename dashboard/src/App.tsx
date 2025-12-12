import { useState, useCallback } from "react";
import { Activity, Github, ExternalLink } from "lucide-react";
import {
  HealthStatus,
  DownloadJobList,
  TraceViewer,
  ErrorList,
  MetricsPanel,
} from "./components";
import { usePolling } from "./hooks";
import { apiClient, DownloadJob, HealthResponse } from "./api";

// Configuration
const JAEGER_URL = import.meta.env.VITE_JAEGER_URL || "http://localhost:16686";
const PROMETHEUS_URL =
  import.meta.env.VITE_PROMETHEUS_URL || "http://localhost:9090";
const GRAFANA_URL = import.meta.env.VITE_GRAFANA_URL || "http://localhost:3001";

function App() {
  const [jobs, setJobs] = useState<DownloadJob[]>([]);

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

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-xl font-bold">Delineate Dashboard</h1>
              <p className="text-xs text-slate-400">
                Observability & Monitoring
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="http://localhost:3000/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-slate-400 hover:text-white"
            >
              API Docs <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://github.com/Seyamalam/cuet-hackathon-1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-slate-400 hover:text-white"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Status Banner */}
        <div className="mb-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">
                CUET Hackathon 2025 - Challenge 4
              </h2>
              <p className="text-sm text-slate-400">
                Observability Dashboard with Sentry, OpenTelemetry, and Jaeger
                integration
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  health?.status === "healthy"
                    ? "bg-green-400 animate-pulse"
                    : "bg-red-400"
                }`}
              ></span>
              <span className="text-sm">
                {health?.status === "healthy"
                  ? "All Systems Operational"
                  : "Issues Detected"}
              </span>
            </div>
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

          {/* Download Jobs */}
          <div className="lg:col-span-2">
            <DownloadJobList jobs={jobs} onJobCreated={handleJobCreated} />
          </div>

          {/* Trace Viewer */}
          <div className="lg:col-span-2">
            <TraceViewer jaegerUrl={JAEGER_URL} />
          </div>

          {/* Metrics Panel */}
          <div className="lg:col-span-2">
            <MetricsPanel
              prometheusUrl={PROMETHEUS_URL}
              grafanaUrl={GRAFANA_URL}
            />
          </div>
        </div>

        {/* Trace Correlation Info */}
        <div className="mt-6 bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h3 className="text-lg font-semibold mb-3">Trace Correlation</h3>
          <p className="text-sm text-slate-400 mb-4">
            This dashboard automatically correlates traces between frontend and
            backend:
          </p>
          <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <div className="text-green-400">// Frontend span creates trace</div>
            <div className="text-slate-300">
              Frontend span → trace-id:{" "}
              <span className="text-blue-400">abc123</span>
            </div>
            <div className="text-slate-300 mt-2">
              // Backend receives propagated context
            </div>
            <div className="text-slate-300">
              Backend header: traceparent=00-
              <span className="text-blue-400">abc123</span>-...
            </div>
            <div className="text-slate-300 mt-2">
              // Sentry errors tagged with trace
            </div>
            <div className="text-slate-300">
              Sentry error → trace_id=
              <span className="text-blue-400">abc123</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-slate-400">
          <p>Delineate Hackathon Challenge — CUET Fest 2025</p>
          <p className="mt-1">
            Built with React, Vite, OpenTelemetry, Sentry, Jaeger, Prometheus &
            Grafana
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
