import { useState, useEffect, useCallback } from "react";
import * as Sentry from "@sentry/react";

// Mock Sentry error data for display (in production, you'd use Sentry's API)
interface SentryError {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  level: "fatal" | "error" | "warning" | "info";
  handled: boolean;
  tags: Record<string, string>;
  breadcrumbs: Breadcrumb[];
  stackTrace?: StackFrame[];
  user?: {
    id?: string;
    email?: string;
    ip_address?: string;
  };
  context?: Record<string, unknown>;
  traceId?: string;
}

interface Breadcrumb {
  timestamp: Date;
  type: string;
  category: string;
  message: string;
  level: string;
  data?: Record<string, unknown>;
}

interface StackFrame {
  filename: string;
  function: string;
  lineno: number;
  colno: number;
  in_app: boolean;
}

// Local error storage (captured errors during this session)
const capturedErrors: SentryError[] = [];

// Hook into Sentry to capture errors locally for display
export function captureErrorForDisplay(
  error: Error,
  context?: Record<string, unknown>,
  traceId?: string
): string {
  const errorId = crypto.randomUUID();
  
  const sentryError: SentryError = {
    id: errorId,
    title: error.name,
    message: error.message,
    timestamp: new Date(),
    level: "error",
    handled: true,
    tags: {
      url: window.location.href,
      userAgent: navigator.userAgent.slice(0, 50),
    },
    breadcrumbs: getBrowserBreadcrumbs(),
    stackTrace: parseStackTrace(error.stack),
    context,
    traceId,
  };
  
  capturedErrors.unshift(sentryError);
  
  // Keep only last 50 errors
  if (capturedErrors.length > 50) {
    capturedErrors.pop();
  }
  
  return errorId;
}

function getBrowserBreadcrumbs(): Breadcrumb[] {
  // Generate sample breadcrumbs from recent navigation/actions
  const breadcrumbs: Breadcrumb[] = [];
  
  // Add navigation breadcrumb
  breadcrumbs.push({
    timestamp: new Date(Date.now() - 5000),
    type: "navigation",
    category: "navigation",
    message: `Navigated to ${window.location.pathname}`,
    level: "info",
  });
  
  return breadcrumbs;
}

function parseStackTrace(stack?: string): StackFrame[] | undefined {
  if (!stack) return undefined;
  
  const frames: StackFrame[] = [];
  const lines = stack.split("\n").slice(1);
  
  for (const line of lines.slice(0, 10)) {
    const match = line.match(/at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)/);
    if (match) {
      frames.push({
        function: match[1],
        filename: match[2],
        lineno: parseInt(match[3]),
        colno: parseInt(match[4]),
        in_app: !match[2].includes("node_modules"),
      });
    }
  }
  
  return frames.length > 0 ? frames : undefined;
}

// Get captured errors
export function getCapturedErrors(): SentryError[] {
  return [...capturedErrors];
}

// Clear captured errors
export function clearCapturedErrors(): void {
  capturedErrors.length = 0;
}

// Trigger a test error for demonstration
export function triggerTestError(): void {
  try {
    throw new Error("Test error triggered from dashboard");
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      captureErrorForDisplay(error, { source: "test_button" });
    }
  }
}

// Component Props
interface SentryErrorsPanelProps {
  className?: string;
}

export function SentryErrorsPanel({ className = "" }: SentryErrorsPanelProps) {
  const [errors, setErrors] = useState<SentryError[]>([]);
  const [selectedError, setSelectedError] = useState<SentryError | null>(null);
  const [activeTab, setActiveTab] = useState<"details" | "breadcrumbs" | "stack" | "context">("details");
  const [filter, setFilter] = useState<"all" | "error" | "warning" | "info">("all");

  // Refresh errors periodically
  useEffect(() => {
    const refreshErrors = () => {
      setErrors(getCapturedErrors());
    };
    
    refreshErrors();
    const interval = setInterval(refreshErrors, 2000);
    return () => clearInterval(interval);
  }, []);

  const filteredErrors = errors.filter((error) => {
    if (filter === "all") return true;
    return error.level === filter;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "fatal":
        return "bg-red-600";
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-500";
      case "info":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "fatal":
        return "text-red-400 bg-red-900/30 border-red-700";
      case "error":
        return "text-red-400 bg-red-900/30 border-red-700";
      case "warning":
        return "text-yellow-400 bg-yellow-900/30 border-yellow-700";
      case "info":
        return "text-blue-400 bg-blue-900/30 border-blue-700";
      default:
        return "text-gray-400 bg-gray-900/30 border-gray-700";
    }
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const handleClearErrors = useCallback(() => {
    clearCapturedErrors();
    setErrors([]);
    setSelectedError(null);
  }, []);

  const handleTriggerTestError = useCallback(() => {
    triggerTestError();
    setTimeout(() => setErrors(getCapturedErrors()), 100);
  }, []);

  return (
    <div className={`bg-gray-800 rounded-lg ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Sentry Errors</h2>
            <p className="text-sm text-gray-400">
              {errors.length} error{errors.length !== 1 ? "s" : ""} captured this session
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as typeof filter)}
            className="bg-gray-700 text-gray-200 text-sm rounded px-2 py-1 border border-gray-600 focus:outline-none focus:border-purple-500"
          >
            <option value="all">All Levels</option>
            <option value="error">Errors Only</option>
            <option value="warning">Warnings</option>
            <option value="info">Info</option>
          </select>
          
          {/* Test Error Button */}
          <button
            onClick={handleTriggerTestError}
            className="px-3 py-1 bg-orange-600 hover:bg-orange-500 text-white text-sm rounded transition-colors"
          >
            Trigger Test Error
          </button>
          
          {/* Clear Button */}
          <button
            onClick={handleClearErrors}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm rounded transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="flex h-[500px]">
        {/* Error List */}
        <div className="w-1/2 border-r border-gray-700 overflow-y-auto">
          {filteredErrors.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-lg">No errors captured</p>
              <p className="text-sm mt-1">Errors will appear here when they occur</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-700">
              {filteredErrors.map((error) => (
                <button
                  key={error.id}
                  onClick={() => setSelectedError(error)}
                  className={`w-full text-left p-4 hover:bg-gray-700/50 transition-colors ${
                    selectedError?.id === error.id ? "bg-gray-700" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${getLevelColor(error.level)}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 text-xs rounded border ${getLevelBadge(error.level)}`}>
                          {error.level.toUpperCase()}
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatTimestamp(error.timestamp)}
                        </span>
                      </div>
                      <h3 className="text-white font-medium truncate">{error.title}</h3>
                      <p className="text-gray-400 text-sm truncate">{error.message}</p>
                      {error.traceId && (
                        <p className="text-purple-400 text-xs mt-1 font-mono">
                          Trace: {error.traceId.slice(0, 16)}...
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Error Details */}
        <div className="w-1/2 overflow-y-auto">
          {selectedError ? (
            <div className="p-4">
              {/* Error Header */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 text-xs rounded border ${getLevelBadge(selectedError.level)}`}>
                    {selectedError.level.toUpperCase()}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {selectedError.handled ? "Handled" : "Unhandled"}
                  </span>
                </div>
                <h3 className="text-xl text-white font-semibold">{selectedError.title}</h3>
                <p className="text-gray-300 mt-1">{selectedError.message}</p>
                <p className="text-gray-500 text-sm mt-2">
                  Event ID: <span className="font-mono text-gray-400">{selectedError.id}</span>
                </p>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-700 mb-4">
                {(["details", "breadcrumbs", "stack", "context"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "text-purple-400 border-b-2 border-purple-400"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === "details" && (
                <div className="space-y-4">
                  {/* Tags */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(selectedError.tags).map(([key, value]) => (
                        <span
                          key={key}
                          className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300"
                        >
                          <span className="text-gray-500">{key}:</span> {value}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Trace ID */}
                  {selectedError.traceId && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Trace ID</h4>
                      <code className="block p-2 bg-gray-900 rounded text-purple-400 text-sm font-mono break-all">
                        {selectedError.traceId}
                      </code>
                    </div>
                  )}

                  {/* Timestamp */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Timestamp</h4>
                    <p className="text-gray-300">{selectedError.timestamp.toISOString()}</p>
                  </div>

                  {/* User Info */}
                  {selectedError.user && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">User</h4>
                      <div className="p-2 bg-gray-900 rounded text-sm">
                        {selectedError.user.id && (
                          <p className="text-gray-300">ID: {selectedError.user.id}</p>
                        )}
                        {selectedError.user.email && (
                          <p className="text-gray-300">Email: {selectedError.user.email}</p>
                        )}
                        {selectedError.user.ip_address && (
                          <p className="text-gray-300">IP: {selectedError.user.ip_address}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "breadcrumbs" && (
                <div className="space-y-2">
                  {selectedError.breadcrumbs.length === 0 ? (
                    <p className="text-gray-400 text-sm">No breadcrumbs recorded</p>
                  ) : (
                    selectedError.breadcrumbs.map((crumb, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-gray-900 rounded border-l-2 border-blue-500"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-blue-400 text-xs font-medium">
                            {crumb.category}
                          </span>
                          <span className="text-gray-500 text-xs">
                            {formatTimestamp(new Date(crumb.timestamp))}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{crumb.message}</p>
                        {crumb.data && (
                          <pre className="mt-2 text-xs text-gray-400 overflow-x-auto">
                            {JSON.stringify(crumb.data, null, 2)}
                          </pre>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}

              {activeTab === "stack" && (
                <div className="space-y-1">
                  {!selectedError.stackTrace || selectedError.stackTrace.length === 0 ? (
                    <p className="text-gray-400 text-sm">No stack trace available</p>
                  ) : (
                    selectedError.stackTrace.map((frame, idx) => (
                      <div
                        key={idx}
                        className={`p-2 rounded text-sm font-mono ${
                          frame.in_app
                            ? "bg-purple-900/30 border border-purple-700"
                            : "bg-gray-900"
                        }`}
                      >
                        <p className="text-white">{frame.function || "(anonymous)"}</p>
                        <p className="text-gray-400 text-xs">
                          {frame.filename}:{frame.lineno}:{frame.colno}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              )}

              {activeTab === "context" && (
                <div>
                  {!selectedError.context || Object.keys(selectedError.context).length === 0 ? (
                    <p className="text-gray-400 text-sm">No additional context</p>
                  ) : (
                    <pre className="p-3 bg-gray-900 rounded text-sm text-gray-300 overflow-x-auto">
                      {JSON.stringify(selectedError.context, null, 2)}
                    </pre>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <svg className="w-12 h-12 mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              <p>Select an error to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SentryErrorsPanel;
