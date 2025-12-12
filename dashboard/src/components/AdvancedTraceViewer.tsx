import { useState, useEffect, useMemo } from "react";
import {
  Search,
  Clock,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  RefreshCw,
  Activity,
  Layers,
  Zap,
} from "lucide-react";
import { jaegerClient, JaegerTrace, JaegerSpan } from "../api";

interface AdvancedTraceViewerProps {
  jaegerUrl: string;
  initialTraceId?: string;
}

interface SpanNode {
  span: JaegerSpan;
  children: SpanNode[];
  depth: number;
  startOffset: number; // Offset from trace start in microseconds
}

export function AdvancedTraceViewer({ jaegerUrl, initialTraceId }: AdvancedTraceViewerProps) {
  const [services, setServices] = useState<string[]>([]);
  const [selectedService, setSelectedService] = useState<string>("");
  const [traces, setTraces] = useState<JaegerTrace[]>([]);
  const [selectedTrace, setSelectedTrace] = useState<JaegerTrace | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTraceId, setSearchTraceId] = useState(initialTraceId || "");
  const [expandedSpans, setExpandedSpans] = useState<Set<string>>(new Set());
  const [selectedSpan, setSelectedSpan] = useState<JaegerSpan | null>(null);
  const [timeRange, setTimeRange] = useState("1h");

  useEffect(() => {
    loadServices();
  }, []);

  // Handle initialTraceId changes
  useEffect(() => {
    if (initialTraceId) {
      setSearchTraceId(initialTraceId);
      // Trigger search for the initial trace ID
      (async () => {
        setLoading(true);
        try {
          const trace = await jaegerClient.getTrace(initialTraceId);
          if (trace) {
            setSelectedTrace(trace);
            setExpandedSpans(new Set(trace.spans.map((s) => s.spanID)));
          }
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [initialTraceId]);

  useEffect(() => {
    if (selectedService) {
      loadTraces();
    }
  }, [selectedService, timeRange]);

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
      const data = await jaegerClient.getTraces(selectedService, 50);
      setTraces(data);
    } finally {
      setLoading(false);
    }
  };

  const searchTrace = async () => {
    if (!searchTraceId.trim()) return;
    setLoading(true);
    try {
      const trace = await jaegerClient.getTrace(searchTraceId.trim());
      if (trace) {
        setSelectedTrace(trace);
        setExpandedSpans(new Set(trace.spans.map((s) => s.spanID)));
      }
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

  // Build span tree from flat list
  const buildSpanTree = (
    trace: JaegerTrace
  ): { roots: SpanNode[]; minTime: number; maxTime: number } => {
    const spanMap = new Map<string, SpanNode>();
    const minTime = Math.min(...trace.spans.map((s) => s.startTime));
    const maxTime = Math.max(
      ...trace.spans.map((s) => s.startTime + s.duration)
    );

    // Create nodes
    trace.spans.forEach((span) => {
      spanMap.set(span.spanID, {
        span,
        children: [],
        depth: 0,
        startOffset: span.startTime - minTime,
      });
    });

    // Build tree
    const roots: SpanNode[] = [];
    trace.spans.forEach((span) => {
      const node = spanMap.get(span.spanID)!;
      const parentRef = span.tags.find((t) => t.key === "parent_span_id");
      // Find parent by checking references (simplified)
      let foundParent = false;
      for (const [, potential] of spanMap) {
        if (
          potential.span.spanID !== span.spanID &&
          potential.span.startTime <= span.startTime &&
          potential.span.startTime + potential.span.duration >=
            span.startTime + span.duration
        ) {
          // This might be a parent
          if (!parentRef) {
            potential.children.push(node);
            foundParent = true;
            break;
          }
        }
      }
      if (!foundParent) {
        roots.push(node);
      }
    });

    // Sort by start time
    const sortNodes = (nodes: SpanNode[], depth: number) => {
      nodes.sort((a, b) => a.span.startTime - b.span.startTime);
      nodes.forEach((n) => {
        n.depth = depth;
        sortNodes(n.children, depth + 1);
      });
    };
    sortNodes(roots, 0);

    return { roots, minTime, maxTime };
  };

  const toggleSpanExpand = (spanId: string) => {
    setExpandedSpans((prev) => {
      const next = new Set(prev);
      if (next.has(spanId)) {
        next.delete(spanId);
      } else {
        next.add(spanId);
      }
      return next;
    });
  };

  const getStatusColor = (span: JaegerSpan) => {
    const errorTag = span.tags.find(
      (t) => t.key === "error" || t.key === "otel.status_code"
    );
    if (errorTag && (errorTag.value === true || errorTag.value === "ERROR")) {
      return "bg-red-500";
    }
    return "bg-blue-500";
  };

  const getStatusBorderColor = (span: JaegerSpan) => {
    const errorTag = span.tags.find(
      (t) => t.key === "error" || t.key === "otel.status_code"
    );
    if (errorTag && (errorTag.value === true || errorTag.value === "ERROR")) {
      return "border-red-500/50 bg-red-500/10";
    }
    return "border-slate-600 hover:border-blue-500/50";
  };

  // Render waterfall timeline
  const renderWaterfallSpan = (
    node: SpanNode,
    totalDuration: number,
    minTime: number
  ) => {
    const widthPercent = (node.span.duration / totalDuration) * 100;
    const leftPercent = (node.startOffset / totalDuration) * 100;
    const serviceName =
      selectedTrace?.processes[node.span.processID]?.serviceName || "unknown";

    return (
      <div key={node.span.spanID} className="group">
        <div
          className={`flex items-center py-1 px-2 cursor-pointer border-b border-slate-700/50 ${getStatusBorderColor(node.span)}`}
          onClick={() => setSelectedSpan(node.span)}
        >
          {/* Expand button & name */}
          <div
            className="flex items-center gap-1 w-64 flex-shrink-0"
            style={{ paddingLeft: `${node.depth * 16}px` }}
          >
            {node.children.length > 0 ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSpanExpand(node.span.spanID);
                }}
                className="p-0.5 hover:bg-slate-700 rounded"
              >
                {expandedSpans.has(node.span.spanID) ? (
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                ) : (
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                )}
              </button>
            ) : (
              <span className="w-4" />
            )}
            <span className="text-xs text-slate-400 truncate">{serviceName}</span>
            <span className="text-sm truncate ml-1">
              {node.span.operationName}
            </span>
          </div>

          {/* Timeline bar */}
          <div className="flex-1 h-6 relative bg-slate-900/50 rounded mx-2">
            <div
              className={`absolute h-full rounded ${getStatusColor(node.span)} opacity-80`}
              style={{
                left: `${leftPercent}%`,
                width: `${Math.max(widthPercent, 0.5)}%`,
              }}
            />
            <span className="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-slate-400">
              {formatDuration(node.span.duration)}
            </span>
          </div>
        </div>

        {/* Children */}
        {expandedSpans.has(node.span.spanID) &&
          node.children.map((child) =>
            renderWaterfallSpan(child, totalDuration, minTime)
          )}
      </div>
    );
  };

  const traceTree = useMemo(() => {
    if (!selectedTrace) return null;
    return buildSpanTree(selectedTrace);
  }, [selectedTrace]);

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-orange-400" />
            <h2 className="text-lg font-semibold">Advanced Trace Viewer</h2>
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

        {/* Controls */}
        <div className="flex flex-wrap gap-3">
          {/* Service selector */}
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-500"
          >
            <option value="">Select service...</option>
            {services.map((svc) => (
              <option key={svc} value={svc}>
                {svc}
              </option>
            ))}
          </select>

          {/* Time range */}
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-500"
          >
            <option value="15m">Last 15 minutes</option>
            <option value="1h">Last hour</option>
            <option value="3h">Last 3 hours</option>
            <option value="12h">Last 12 hours</option>
            <option value="24h">Last 24 hours</option>
          </select>

          {/* Search by trace ID */}
          <div className="flex gap-2 flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Search by Trace ID..."
              value={searchTraceId}
              onChange={(e) => setSearchTraceId(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchTrace()}
              className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-500"
            />
            <button
              onClick={searchTrace}
              className="bg-orange-600 hover:bg-orange-700 px-3 py-2 rounded-lg text-sm transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={loadTraces}
            disabled={loading}
            className="bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-1"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Traces list */}
        <div className="w-80 border-r border-slate-700 max-h-[600px] overflow-y-auto">
          <div className="p-2 border-b border-slate-700 bg-slate-900/50">
            <span className="text-xs text-slate-400 font-medium">
              {traces.length} traces found
            </span>
          </div>
          {traces.length === 0 ? (
            <p className="text-slate-400 text-sm p-4">
              No traces found. Make API requests to generate traces.
            </p>
          ) : (
            <div className="divide-y divide-slate-700/50">
              {traces.map((trace) => {
                const rootSpan = trace.spans.reduce((min, span) =>
                  span.startTime < min.startTime ? span : min
                );
                const totalDuration = Math.max(
                  ...trace.spans.map((s) => s.duration)
                );
                const hasErrors = trace.spans.some((span) =>
                  span.tags.some(
                    (t) =>
                      (t.key === "error" && t.value === true) ||
                      (t.key === "otel.status_code" && t.value === "ERROR")
                  )
                );
                const isSelected = selectedTrace?.traceID === trace.traceID;

                return (
                  <div
                    key={trace.traceID}
                    className={`p-3 cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-blue-600/20 border-l-2 border-blue-500"
                        : "hover:bg-slate-700/50"
                    } ${hasErrors ? "bg-red-500/5" : ""}`}
                    onClick={() => {
                      setSelectedTrace(trace);
                      setExpandedSpans(
                        new Set(trace.spans.map((s) => s.spanID))
                      );
                      setSelectedSpan(null);
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium truncate flex-1">
                        {rootSpan.operationName}
                      </span>
                      {hasErrors && (
                        <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 ml-1" />
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Layers className="w-3 h-3" />
                        {trace.spans.length} spans
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatDuration(totalDuration)}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1 truncate font-mono">
                      {trace.traceID.substring(0, 16)}...
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Trace detail */}
        <div className="flex-1 max-h-[600px] overflow-hidden flex flex-col">
          {selectedTrace && traceTree ? (
            <>
              {/* Trace header */}
              <div className="p-3 border-b border-slate-700 bg-slate-900/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">
                      {selectedTrace.spans[0]?.operationName}
                    </h3>
                    <div className="text-xs text-slate-400 mt-1 font-mono">
                      Trace ID: {selectedTrace.traceID}
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-slate-400" />
                      <span>{selectedTrace.spans.length} spans</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Clock className="w-4 h-4" />
                      <span>
                        {formatDuration(traceTree.maxTime - traceTree.minTime)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline header */}
              <div className="flex border-b border-slate-700 bg-slate-900/30 text-xs text-slate-400">
                <div className="w-64 flex-shrink-0 p-2 border-r border-slate-700">
                  Service & Operation
                </div>
                <div className="flex-1 p-2 flex justify-between">
                  <span>0ms</span>
                  <span>
                    {formatDuration(traceTree.maxTime - traceTree.minTime)}
                  </span>
                </div>
              </div>

              {/* Waterfall view */}
              <div className="flex-1 overflow-y-auto">
                {traceTree.roots.map((root) =>
                  renderWaterfallSpan(
                    root,
                    traceTree.maxTime - traceTree.minTime,
                    traceTree.minTime
                  )
                )}
              </div>

              {/* Span detail panel */}
              {selectedSpan && (
                <div className="border-t border-slate-700 bg-slate-900/50 p-4 max-h-64 overflow-y-auto">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      {selectedSpan.operationName}
                    </h4>
                    <button
                      onClick={() => setSelectedSpan(null)}
                      className="text-slate-400 hover:text-white"
                    >
                      ×
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <span className="text-slate-400">Span ID:</span>
                      <code className="ml-2 text-xs bg-slate-800 px-1 rounded">
                        {selectedSpan.spanID}
                      </code>
                    </div>
                    <div>
                      <span className="text-slate-400">Duration:</span>
                      <span className="ml-2">
                        {formatDuration(selectedSpan.duration)}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400">Service:</span>
                      <span className="ml-2">
                        {selectedTrace.processes[selectedSpan.processID]
                          ?.serviceName || "unknown"}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400">Start:</span>
                      <span className="ml-2">
                        {formatTime(selectedSpan.startTime)}
                      </span>
                    </div>
                  </div>
                  {/* Tags */}
                  {selectedSpan.tags.length > 0 && (
                    <div>
                      <h5 className="text-sm font-medium text-slate-400 mb-2">
                        Tags
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {selectedSpan.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`text-xs px-2 py-1 rounded ${
                              tag.key === "error" || tag.key === "otel.status_code"
                                ? "bg-red-500/20 text-red-300"
                                : "bg-slate-700 text-slate-300"
                            }`}
                          >
                            {tag.key}={String(tag.value)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Logs */}
                  {selectedSpan.logs.length > 0 && (
                    <div className="mt-4">
                      <h5 className="text-sm font-medium text-slate-400 mb-2">
                        Logs ({selectedSpan.logs.length})
                      </h5>
                      <div className="space-y-2">
                        {selectedSpan.logs.map((log, i) => (
                          <div
                            key={i}
                            className="text-xs bg-slate-800 rounded p-2"
                          >
                            <span className="text-slate-400">
                              {new Date(log.timestamp / 1000).toISOString()}
                            </span>
                            <div className="mt-1">
                              {log.fields.map((f, j) => (
                                <span key={j} className="mr-2">
                                  {f.key}={f.value}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-400">
              <div className="text-center">
                <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Select a trace to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
