
import {
  Activity,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Clock,
  Database,
  Server,
} from "lucide-react";
import { HealthResponse } from "../api";

interface HealthStatusProps {
  health: HealthResponse | null;
  loading: boolean;
  error: Error | null;
  lastUpdated: Date | null;
}

export function HealthStatus({
  health,
  loading,
  error,
  lastUpdated,
}: HealthStatusProps) {
  const getStatusColor = (status: string | undefined) => {
    if (status === "healthy" || status === "ok") return "text-green-400";
    if (status === "unhealthy" || status === "error") return "text-red-400";
    return "text-yellow-400";
  };

  const getStatusIcon = (status: string | undefined) => {
    if (status === "healthy" || status === "ok")
      return <CheckCircle2 className="w-5 h-5" />;
    if (status === "unhealthy" || status === "error")
      return <XCircle className="w-5 h-5" />;
    return <AlertCircle className="w-5 h-5" />;
  };

  if (loading && !health) {
    return (
      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-blue-400 animate-pulse" />
          <h2 className="text-lg font-semibold">System Health</h2>
        </div>
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-slate-700 rounded w-3/4"></div>
          <div className="h-4 bg-slate-700 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-slate-800 rounded-lg p-6 border border-red-500/50">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-5 h-5 text-red-400" />
          <h2 className="text-lg font-semibold">System Health</h2>
        </div>
        <p className="text-red-400">
          Failed to fetch health status: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-400" />
          <h2 className="text-lg font-semibold">System Health</h2>
        </div>
        {lastUpdated && (
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <Clock className="w-3 h-3" />
            {lastUpdated.toLocaleTimeString()}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Overall Status */}
        <div className="bg-slate-900/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Server className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-400">API Status</span>
          </div>
          <div
            className={`flex items-center gap-2 ${getStatusColor(health?.status)}`}
          >
            {getStatusIcon(health?.status)}
            <span className="font-medium capitalize">
              {health?.status || "Unknown"}
            </span>
          </div>
        </div>

        {/* Storage Status */}
        <div className="bg-slate-900/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Database className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-400">Storage (S3)</span>
          </div>
          <div
            className={`flex items-center gap-2 ${getStatusColor(health?.checks?.storage)}`}
          >
            {getStatusIcon(health?.checks?.storage)}
            <span className="font-medium capitalize">
              {health?.checks?.storage || "Unknown"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
