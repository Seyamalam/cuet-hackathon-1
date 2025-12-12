import { useState, useEffect, useCallback } from "react";
import {
  AlertCircle,
  Bug,
  RefreshCw,
  Trash2,
  Server,
  Monitor,
  ExternalLink,
} from "lucide-react";
import { captureError, addBreadcrumb } from "../sentry";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface ApiError {
  id: string;
  timestamp: string;
  message: string;
  stack?: string;
  endpoint?: string;
  method?: string;
  status?: number;
  requestId?: string;
}

interface LocalError {
  id: string;
  message: string;
  timestamp: Date;
  source: "frontend" | "api";
  context?: Record<string, unknown>;
}

export function ErrorList() {
  const [localErrors, setLocalErrors] = useState<LocalError[]>([]);
  const [apiErrors, setApiErrors] = useState<ApiError[]>([]);
  const [testError, setTestError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "api" | "frontend">("all");

  const fetchApiErrors = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/errors`);
      if (response.ok) {
        const data = await response.json();
        setApiErrors(data.errors || []);
      }
    } catch (error) {
      console.error("Failed to fetch API errors:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchApiErrors();
    const interval = setInterval(fetchApiErrors, 10000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, [fetchApiErrors]);

  const handleTriggerFrontendError = () => {
    const errorMessage = testError || "Test error triggered from dashboard";
    const error = new Error(errorMessage);

    addBreadcrumb("User triggered test error", "user", {
      message: errorMessage,
    });
    captureError(error, { source: "dashboard", userTriggered: true });

    setLocalErrors((prev) => [
      {
        id: crypto.randomUUID(),
        message: errorMessage,
        timestamp: new Date(),
        source: "frontend",
        context: { userTriggered: true },
      },
      ...prev,
    ]);

    setTestError("");
  };

  const handleTriggerApiError = async () => {
    try {
      addBreadcrumb("Triggering API test error", "api");
      await fetch(`${API_URL}/errors/test`, { method: "POST" });
      // Refresh to see the new error
      await fetchApiErrors();
    } catch (error) {
      console.error("Failed to trigger API error:", error);
    }
  };

  const clearLocalErrors = () => setLocalErrors([]);

  const allErrors = [
    ...localErrors.map((e) => ({
      ...e,
      source: "frontend" as const,
      timestamp: e.timestamp.toISOString(),
    })),
    ...apiErrors.map((e) => ({ ...e, source: "api" as const })),
  ].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
  );

  const filteredErrors =
    activeTab === "all"
      ? allErrors
      : allErrors.filter((e) => e.source === activeTab);

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-400" />
          <h2 className="text-lg font-semibold">Error Tracking</h2>
          {loading && (
            <RefreshCw className="w-4 h-4 text-slate-400 animate-spin" />
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchApiErrors}
            className="text-slate-400 hover:text-white p-1"
            title="Refresh errors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          {localErrors.length > 0 && (
            <button
              onClick={clearLocalErrors}
              className="text-slate-400 hover:text-white flex items-center gap-1 text-sm"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-4">
        {(["all", "api", "frontend"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
              activeTab === tab
                ? "bg-red-600 text-white"
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            {tab === "api" && <Server className="w-3.5 h-3.5" />}
            {tab === "frontend" && <Monitor className="w-3.5 h-3.5" />}
            {tab === "all" && <AlertCircle className="w-3.5 h-3.5" />}
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            <span className="ml-1 bg-slate-900/50 px-1.5 rounded text-xs">
              {tab === "all"
                ? allErrors.length
                : allErrors.filter((e) => e.source === tab).length}
            </span>
          </button>
        ))}
      </div>

      {/* Test Error Triggers */}
      <div className="mb-4 space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={testError}
            onChange={(e) => setTestError(e.target.value)}
            placeholder="Custom error message (optional)"
            className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-500"
          />
          <button
            onClick={handleTriggerFrontendError}
            className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg flex items-center gap-1.5 text-sm transition-colors"
            title="Trigger frontend error"
          >
            <Monitor className="w-4 h-4" />
            Frontend
          </button>
          <button
            onClick={handleTriggerApiError}
            className="bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-lg flex items-center gap-1.5 text-sm transition-colors"
            title="Trigger API error"
          >
            <Server className="w-4 h-4" />
            API
          </button>
        </div>
      </div>

      {/* Error List */}
      {filteredErrors.length === 0 ? (
        <div className="text-center py-8">
          <Bug className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <p className="text-slate-400 text-sm">No errors captured yet.</p>
          <p className="text-slate-500 text-xs mt-1">
            Use the buttons above to test error tracking.
          </p>
        </div>
      ) : (
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {filteredErrors.map((error) => (
            <div
              key={error.id}
              className={`border rounded-lg p-3 ${
                error.source === "api"
                  ? "bg-purple-500/10 border-purple-500/30"
                  : "bg-red-500/10 border-red-500/30"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {error.source === "api" ? (
                      <Server className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                    ) : (
                      <Monitor className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                    )}
                    <span
                      className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                        error.source === "api"
                          ? "bg-purple-600/30 text-purple-300"
                          : "bg-red-600/30 text-red-300"
                      }`}
                    >
                      {error.source.toUpperCase()}
                    </span>
                    {"endpoint" in error && error.endpoint && (
                      <span className="text-xs text-slate-400 font-mono">
                        {"method" in error && error.method} {error.endpoint}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm font-medium truncate ${
                      error.source === "api"
                        ? "text-purple-300"
                        : "text-red-300"
                    }`}
                  >
                    {error.message}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-slate-500">
                      {new Date(error.timestamp).toLocaleString()}
                    </span>
                    {"requestId" in error && error.requestId && (
                      <span className="text-xs text-slate-500 font-mono truncate">
                        ID: {error.requestId.slice(0, 8)}...
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sentry Integration Info */}
      <div className="mt-4 p-3 bg-slate-900/50 rounded-lg">
        <div className="flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
          <div className="text-xs text-slate-400">
            <p className="font-medium text-slate-300 mb-1">
              Sentry Integration
            </p>
            <a
              href="https://sentry.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
            >
              Open Sentry Dashboard <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
