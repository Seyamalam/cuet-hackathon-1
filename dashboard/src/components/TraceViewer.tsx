import { useState, useEffect } from "react";
import {
  Search,
  Clock,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { jaegerClient, JaegerTrace, JaegerSpan } from "../api";

interface TraceViewerProps {
  jaegerUrl: string;
}

export function TraceViewer({ jaegerUrl }: TraceViewerProps) {
  const [services, setServices] = useState<string[]>([]);
  const [selectedService, setSelectedService] = useState<string>("");
  const [traces, setTraces] = useState<JaegerTrace[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedTrace, setExpandedTrace] = useState<string | null>(null);

  useEffect(() => {
    loadServices();
  }, []);

  useEffect(() => {
    if (selectedService) {
      loadTraces();
    }
  }, [selectedService]);

  const loadServices = async () => {
    const svcs = await jaegerClient.getServices();
    setServices(svcs);
    if (svcs.length > 0 && !selectedService) {
      setSelectedService(svcs[0]);
    }
  };

  const loadTraces = async () => {
    if (!selectedService) return;
    setLoading(true);
    try {
      const data = await jaegerClient.getTraces(selectedService, 20);
      setTraces(data);
    } finally {
      setLoading(false);
    }
  };

  const formatDuration = (microseconds: number) => {
    if (microseconds < 1000) return `${microseconds}μs`;
    if (microseconds < 1000000) return `${(microseconds / 1000).toFixed(2)}ms`;
    return `${(microseconds / 1000000).toFixed(2)}s`;
  };

  const formatTime = (microseconds: number) => {
    const date = new Date(microseconds / 1000);
    return date.toLocaleTimeString();
  };

  const getStatusColor = (span: JaegerSpan) => {
    const errorTag = span.tags.find(
      (t) => t.key === "error" || t.key === "otel.status_code",
    );
    if (errorTag && (errorTag.value === true || errorTag.value === "ERROR")) {
      return "border-red-500 bg-red-500/10";
    }
    return "border-slate-600 bg-slate-900/50";
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5 text-orange-400" />
          <h2 className="text-lg font-semibold">Trace Viewer</h2>
        </div>
        <a
          href={jaegerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
        >
          Open Jaeger UI <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Service Selector */}
      <div className="flex gap-2 mb-4">
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-500"
        >
          <option value="">Select a service...</option>
          {services.map((svc) => (
            <option key={svc} value={svc}>
              {svc}
            </option>
          ))}
        </select>
        <button
          onClick={loadTraces}
          disabled={loading || !selectedService}
          className="bg-orange-600 hover:bg-orange-700 disabled:bg-slate-600 px-4 py-2 rounded-lg text-sm transition-colors"
        >
          {loading ? "Loading..." : "Refresh"}
        </button>
      </div>

      {/* Traces List */}
      {traces.length === 0 ? (
        <p className="text-slate-400 text-sm">
          {selectedService
            ? "No traces found. Make some API requests to generate traces."
            : "Select a service to view traces."}
        </p>
      ) : (
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {traces.map((trace) => {
            const rootSpan = trace.spans.reduce((min, span) =>
              span.startTime < min.startTime ? span : min,
            );
            const totalDuration = trace.spans.reduce(
              (max, span) => Math.max(max, span.duration),
              0,
            );
            const hasErrors = trace.spans.some((span) =>
              span.tags.some(
                (t) =>
                  (t.key === "error" && t.value === true) ||
                  (t.key === "otel.status_code" && t.value === "ERROR"),
              ),
            );
            const isExpanded = expandedTrace === trace.traceID;

            return (
              <div
                key={trace.traceID}
                className="border border-slate-600 rounded-lg overflow-hidden"
              >
                <div
                  className={`p-3 cursor-pointer hover:bg-slate-700/50 transition-colors ${
                    hasErrors ? "bg-red-500/10" : ""
                  }`}
                  onClick={() =>
                    setExpandedTrace(isExpanded ? null : trace.traceID)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      )}
                      <span className="font-medium">
                        {rootSpan.operationName}
                      </span>
                      {hasErrors && (
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>{trace.spans.length} spans</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatDuration(totalDuration)}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    <code>{trace.traceID}</code> •{" "}
                    {formatTime(rootSpan.startTime)}
                  </div>
                </div>

                {isExpanded && (
                  <div className="border-t border-slate-600 p-3 space-y-2 bg-slate-900/30">
                    {trace.spans
                      .sort((a, b) => a.startTime - b.startTime)
                      .map((span) => (
                        <div
                          key={span.spanID}
                          className={`border-l-2 pl-3 py-1 ${getStatusColor(span)}`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              {span.operationName}
                            </span>
                            <span className="text-xs text-slate-400">
                              {formatDuration(span.duration)}
                            </span>
                          </div>
                          <div className="text-xs text-slate-500">
                            {trace.processes[span.processID]?.serviceName ||
                              "unknown"}
                          </div>
                          {span.tags.length > 0 && (
                            <div className="mt-1 flex flex-wrap gap-1">
                              {span.tags.slice(0, 5).map((tag, i) => (
                                <span
                                  key={i}
                                  className="text-xs bg-slate-700 px-1.5 py-0.5 rounded"
                                >
                                  {tag.key}={String(tag.value)}
                                </span>
                              ))}
                              {span.tags.length > 5 && (
                                <span className="text-xs text-slate-500">
                                  +{span.tags.length - 5} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
