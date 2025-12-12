import { useState } from "react";
import {
  Download,
  Play,
  Search,
  Loader2,
  CheckCircle2,
  XCircle,
  Clock,
  FileDown,
} from "lucide-react";
import {
  apiClient,
  DownloadJob,
  DownloadCheckResponse,
  DownloadStartResponse,
} from "../api";
import { captureError, addBreadcrumb } from "../sentry";

interface DownloadJobListProps {
  jobs: DownloadJob[];
  onJobCreated: (job: DownloadJob) => void;
}

export function DownloadJobList({ jobs, onJobCreated }: DownloadJobListProps) {
  const [fileIds, setFileIds] = useState("");
  const [checkFileId, setCheckFileId] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkResult, setCheckResult] = useState<DownloadCheckResponse | null>(
    null,
  );
  const [startResult, setStartResult] = useState<DownloadStartResponse | null>(
    null,
  );
  const [startLoading, setStartLoading] = useState(false);

  const handleInitiate = async () => {
    if (!fileIds.trim()) return;

    setLoading(true);
    try {
      const ids = fileIds
        .split(",")
        .map((id) => parseInt(id.trim(), 10))
        .filter((id) => !isNaN(id));
      if (ids.length === 0) {
        throw new Error("Please enter valid file IDs");
      }

      addBreadcrumb("Initiating download", "user", { fileIds: ids });
      const job = await apiClient.initiateDownload(ids);
      onJobCreated(job);
      setFileIds("");
    } catch (error) {
      captureError(error as Error, { fileIds });
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
    try {
      addBreadcrumb("Checking file availability", "user", { fileId });
      const result = await apiClient.checkDownload(fileId);
      setCheckResult(result);
    } catch (error) {
      captureError(error as Error, { fileId });
      alert(`Error: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleStartDownload = async (fileId: number) => {
    setStartLoading(true);
    setStartResult(null);
    try {
      addBreadcrumb("Starting download", "user", { fileId });
      const result = await apiClient.startDownload(fileId);
      setStartResult(result);
    } catch (error) {
      captureError(error as Error, { fileId });
      alert(`Error: ${(error as Error).message}`);
    } finally {
      setStartLoading(false);
    }
  };

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
              <span
                className={
                  checkResult.available ? "text-green-400" : "text-red-400"
                }
              >
                File {checkResult.file_id} is{" "}
                {checkResult.available ? "available" : "not available"}
              </span>
            </div>
            {checkResult.available && (
              <>
                <div className="text-sm text-slate-400">
                  S3 Key:{" "}
                  <code className="text-blue-400">{checkResult.s3Key}</code>
                </div>
                <div className="text-sm text-slate-400">
                  Size:{" "}
                  {checkResult.size
                    ? `${(checkResult.size / 1024 / 1024).toFixed(2)} MB`
                    : "Unknown"}
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
              <span
                className={
                  startResult.status === "completed"
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {startResult.message}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Clock className="w-4 h-4" />
              Processing time:{" "}
              {(startResult.processingTimeMs / 1000).toFixed(1)}s
            </div>
            {startResult.downloadUrl && (
              <div className="text-sm text-slate-400 truncate">
                Download URL:{" "}
                <code className="text-blue-400">{startResult.downloadUrl}</code>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Job List */}
      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <FileDown className="w-5 h-5 text-purple-400" />
          <h2 className="text-lg font-semibold">Recent Jobs</h2>
        </div>
        {jobs.length === 0 ? (
          <p className="text-slate-400 text-sm">
            No jobs yet. Initiate a download to see jobs here.
          </p>
        ) : (
          <div className="space-y-2">
            {jobs.map((job) => (
              <div
                key={job.jobId}
                className="bg-slate-900/50 rounded-lg p-3 flex items-center justify-between"
              >
                <div>
                  <code className="text-sm text-blue-400">{job.jobId}</code>
                  <div className="text-xs text-slate-400 mt-1">
                    {job.totalFileIds} file(s) • Status: {job.status}
                  </div>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    job.status === "completed"
                      ? "bg-green-500/20 text-green-400"
                      : job.status === "failed"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {job.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
