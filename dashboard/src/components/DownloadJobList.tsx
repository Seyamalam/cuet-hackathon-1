import { useState, useCallback, useEffect } from "react";
import {
  Download,
  Play,
  Search,
  Loader2,
  CheckCircle2,
  XCircle,
  Clock,
  FileDown,
  Activity,
  ExternalLink,
  RefreshCw,
} from "lucide-react";
import {
  apiClient,
  DownloadJob,
  DownloadCheckResponse,
  DownloadStartResponse,
} from "../api";
import { captureError, addBreadcrumb } from "../sentry";
import { startNewTrace } from "../tracing";
import { captureErrorForDisplay } from "./SentryErrorsPanel";

interface EnhancedDownloadJob extends DownloadJob {
  traceId?: string;
  spanId?: string;
  startedAt?: Date;
  completedAt?: Date;
  processingTimeMs?: number;
  error?: string;
}

interface DownloadJobListProps {
  jobs: DownloadJob[];
  onJobCreated: (job: DownloadJob) => void;
  onTraceClick?: (traceId: string) => void;
}

export function DownloadJobList({ jobs, onJobCreated, onTraceClick }: DownloadJobListProps) {
  const [fileIds, setFileIds] = useState("");
  const [checkFileId, setCheckFileId] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkResult, setCheckResult] = useState<DownloadCheckResponse | null>(null);
  const [startResult, setStartResult] = useState<DownloadStartResponse | null>(null);
  const [startLoading, setStartLoading] = useState(false);
  const [enhancedJobs, setEnhancedJobs] = useState<EnhancedDownloadJob[]>([]);
  const [currentTraceId, setCurrentTraceId] = useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(true);

  // Update enhanced jobs when base jobs change
  useEffect(() => {
    setEnhancedJobs((prev) => {
      const existingMap = new Map(prev.map((j) => [j.jobId, j]));
      return jobs.map((job) => ({
        ...job,
        ...existingMap.get(job.jobId),
      }));
    });
  }, [jobs]);

  // Auto-refresh simulation for job status
  useEffect(() => {
    if (!autoRefresh) return;
    
    const interval = setInterval(() => {
      setEnhancedJobs((prev) =>
        prev.map((job) => {
          if (job.status === "processing") {
            const random = Math.random();
            if (random > 0.9) {
              return { ...job, status: "completed", completedAt: new Date() };
            }
          }
          return job;
        })
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [autoRefresh]);

  const handleInitiate = async () => {
    if (!fileIds.trim()) return;

    setLoading(true);
    const { traceId, spanId } = startNewTrace();
    setCurrentTraceId(traceId);
    
    try {
      const ids = fileIds
        .split(",")
        .map((id) => parseInt(id.trim(), 10))
        .filter((id) => !isNaN(id));
      if (ids.length === 0) {
        throw new Error("Please enter valid file IDs");
      }

      addBreadcrumb("Initiating download", "user", { fileIds: ids, traceId });
      const startedAt = new Date();
      const job = await apiClient.initiateDownload(ids);
      
      const enhancedJob: EnhancedDownloadJob = {
        ...job,
        traceId,
        spanId,
        startedAt,
      };
      
      onJobCreated(job);
      setEnhancedJobs((prev) => [enhancedJob, ...prev]);
      setFileIds("");
    } catch (error) {
      captureError(error as Error, { fileIds, traceId });
      captureErrorForDisplay(error as Error, { fileIds, traceId }, traceId);
      alert(`Error: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCheck = async () => {
    if (!checkFileId.trim()) return;

    const fileId = parseInt(checkFileId.trim(), 10);
    if (isNaN(fileId)) {
      alert("Please enter a valid file ID");
      return;
    }

    setLoading(true);
    setCheckResult(null);
    const { traceId } = startNewTrace();
    setCurrentTraceId(traceId);
    
    try {
      addBreadcrumb("Checking file availability", "user", { fileId, traceId });
      const result = await apiClient.checkDownload(fileId);
      setCheckResult(result);
    } catch (error) {
      captureError(error as Error, { fileId, traceId });
      captureErrorForDisplay(error as Error, { fileId, traceId }, traceId);
      alert(`Error: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleStartDownload = async (fileId: number) => {
    setStartLoading(true);
    setStartResult(null);
    const { traceId } = startNewTrace();
    setCurrentTraceId(traceId);
    
    try {
      addBreadcrumb("Starting download", "user", { fileId, traceId });
      const result = await apiClient.startDownload(fileId);
      setStartResult(result);
    } catch (error) {
      captureError(error as Error, { fileId, traceId });
      captureErrorForDisplay(error as Error, { fileId, traceId }, traceId);
      alert(`Error: ${(error as Error).message}`);
    } finally {
      setStartLoading(false);
    }
  };

  const handleTraceClick = useCallback((traceId: string) => {
    if (onTraceClick) {
      onTraceClick(traceId);
    }
  }, [onTraceClick]);

  return (
    <div className="space-y-6">
      {/* Initiate Download */}
      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <Download className="w-5 h-5 text-blue-400" />
          <h2 className="text-lg font-semibold">Initiate Bulk Download</h2>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={fileIds}
            onChange={(e) => setFileIds(e.target.value)}
            placeholder="Enter file IDs (comma-separated, e.g., 10000, 20000, 30000)"
            className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleInitiate}
            disabled={loading || !fileIds.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Play className="w-4 h-4" />
            )}
            Initiate
          </button>
        </div>
      </div>

      {/* Check Availability */}
      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <Search className="w-5 h-5 text-green-400" />
          <h2 className="text-lg font-semibold">Check File Availability</h2>
        </div>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={checkFileId}
            onChange={(e) => setCheckFileId(e.target.value)}
            placeholder="Enter file ID (e.g., 70000)"
            className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-green-500"
          />
          <button
            onClick={handleCheck}
            disabled={loading || !checkFileId.trim()}
            className="bg-green-600 hover:bg-green-700 disabled:bg-slate-600 disabled:cursor-not-allowed px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Search className="w-4 h-4" />
            )}
            Check
          </button>
        </div>

        {checkResult && (
          <div className="bg-slate-900/50 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2">
              {checkResult.available ? (
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              ) : (
                <XCircle className="w-5 h-5 text-red-400" />
              )}
              <span className={checkResult.available ? "text-green-400" : "text-red-400"}>
                File {checkResult.file_id} is {checkResult.available ? "available" : "not available"}
              </span>
            </div>
            {checkResult.available && (
              <>
                <div className="text-sm text-slate-400">
                  S3 Key: <code className="text-blue-400">{checkResult.s3Key}</code>
                </div>
                <div className="text-sm text-slate-400">
                  Size: {checkResult.size ? `${(checkResult.size / 1024 / 1024).toFixed(2)} MB` : "Unknown"}
                </div>
                <button
                  onClick={() => handleStartDownload(checkResult.file_id)}
                  disabled={startLoading}
                  className="mt-2 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm"
                >
                  {startLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <FileDown className="w-4 h-4" />
                  )}
                  Start Download (Long-running)
                </button>
              </>
            )}
          </div>
        )}

        {startResult && (
          <div className="mt-4 bg-slate-900/50 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2">
              {startResult.status === "completed" ? (
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              ) : (
                <XCircle className="w-5 h-5 text-red-400" />
              )}
              <span className={startResult.status === "completed" ? "text-green-400" : "text-red-400"}>
                {startResult.message}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Clock className="w-4 h-4" />
              Processing time: {(startResult.processingTimeMs / 1000).toFixed(1)}s
            </div>
            {startResult.downloadUrl && (
              <div className="text-sm text-slate-400 truncate">
                Download URL: <code className="text-blue-400">{startResult.downloadUrl}</code>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Job List */}
      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileDown className="w-5 h-5 text-purple-400" />
            <h2 className="text-lg font-semibold">Recent Jobs</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${
                autoRefresh 
                  ? "bg-green-600/20 text-green-400 border border-green-600/50"
                  : "bg-slate-700 text-slate-400"
              }`}
            >
              <RefreshCw className={`w-3 h-3 ${autoRefresh ? "animate-spin" : ""}`} />
              Auto-refresh
            </button>
          </div>
        </div>
        
        {/* Current Trace ID Display */}
        {currentTraceId && (
          <div className="mb-4 p-3 bg-purple-900/30 border border-purple-700/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Current Trace:</span>
              <code className="text-xs text-purple-400 font-mono bg-purple-900/50 px-2 py-1 rounded">
                {currentTraceId}
              </code>
              {onTraceClick && (
                <button
                  onClick={() => handleTraceClick(currentTraceId)}
                  className="ml-auto flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300"
                >
                  <ExternalLink className="w-3 h-3" />
                  View in Jaeger
                </button>
              )}
            </div>
          </div>
        )}
        
        {enhancedJobs.length === 0 && jobs.length === 0 ? (
          <p className="text-slate-400 text-sm">
            No jobs yet. Initiate a download to see jobs here.
          </p>
        ) : (
          <div className="space-y-3">
            {(enhancedJobs.length > 0 ? enhancedJobs : jobs).map((job) => {
              const enhanced = job as EnhancedDownloadJob;
              return (
                <div
                  key={job.jobId}
                  className="bg-slate-900/50 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <code className="text-sm text-blue-400 font-mono">{job.jobId}</code>
                      <div className="text-xs text-slate-400 mt-1">
                        {job.totalFileIds} file(s) • Created {enhanced.startedAt?.toLocaleTimeString() || "recently"}
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium flex items-center gap-1 ${
                        job.status === "completed"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : job.status === "failed"
                            ? "bg-red-500/20 text-red-400 border border-red-500/30"
                            : job.status === "processing"
                              ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                              : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {job.status === "processing" && <Loader2 className="w-3 h-3 animate-spin" />}
                      {job.status === "completed" && <CheckCircle2 className="w-3 h-3" />}
                      {job.status === "failed" && <XCircle className="w-3 h-3" />}
                      {job.status === "queued" && <Clock className="w-3 h-3" />}
                      {job.status}
                    </span>
                  </div>
                  
                  {/* Trace Information */}
                  {enhanced.traceId && (
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-700">
                      <Activity className="w-3 h-3 text-purple-400" />
                      <span className="text-xs text-slate-500">Trace ID:</span>
                      <button
                        onClick={() => enhanced.traceId && handleTraceClick(enhanced.traceId)}
                        className="text-xs text-purple-400 font-mono hover:text-purple-300 hover:underline"
                      >
                        {enhanced.traceId.slice(0, 16)}...
                      </button>
                      {onTraceClick && (
                        <button
                          onClick={() => enhanced.traceId && handleTraceClick(enhanced.traceId)}
                          className="ml-auto text-xs text-slate-400 hover:text-white flex items-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3" />
                          View Trace
                        </button>
                      )}
                    </div>
                  )}
                  
                  {/* Processing time if completed */}
                  {enhanced.completedAt && enhanced.startedAt && (
                    <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      Processing time: {((enhanced.completedAt.getTime() - enhanced.startedAt.getTime()) / 1000).toFixed(1)}s
                    </div>
                  )}
                  
                  {/* Error message if failed */}
                  {enhanced.error && (
                    <div className="mt-2 p-2 bg-red-900/20 border border-red-700/30 rounded text-xs text-red-400">
                      {enhanced.error}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
