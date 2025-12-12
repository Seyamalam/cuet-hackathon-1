import React, { Component, ErrorInfo, ReactNode } from "react";
import * as Sentry from "@sentry/react";
import { AlertTriangle, RefreshCw, MessageSquare, X } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  eventId: string | null;
  showFeedback: boolean;
  feedbackSubmitted: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
    eventId: null,
    showFeedback: false,
    feedbackSubmitted: false,
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });

    // Capture error in Sentry and get event ID
    const eventId = Sentry.captureException(error, {
      extra: {
        componentStack: errorInfo.componentStack,
      },
    });
    this.setState({ eventId });
  }

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      eventId: null,
      showFeedback: false,
      feedbackSubmitted: false,
    });
  };

  private handleShowFeedback = () => {
    this.setState({ showFeedback: true });
  };

  private handleSubmitFeedback = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const feedback = formData.get("feedback") as string;
    const email = formData.get("email") as string;

    if (this.state.eventId) {
      Sentry.captureUserFeedback({
        event_id: this.state.eventId,
        name: email || "Anonymous",
        email: email || "",
        comments: feedback,
      });
    }

    this.setState({ feedbackSubmitted: true, showFeedback: false });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-lg border border-red-500/50 p-8 max-w-lg w-full">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <h1 className="text-xl font-bold text-red-400">
                Something went wrong
              </h1>
            </div>

            <p className="text-slate-300 mb-4">
              An unexpected error occurred. Our team has been notified.
            </p>

            {this.state.error && (
              <div className="bg-slate-900 rounded-lg p-4 mb-4 overflow-auto max-h-40">
                <p className="font-mono text-sm text-red-300">
                  {this.state.error.message}
                </p>
              </div>
            )}

            {this.state.eventId && (
              <p className="text-xs text-slate-500 mb-4">
                Error ID:{" "}
                <code className="bg-slate-900 px-1 rounded">
                  {this.state.eventId}
                </code>
              </p>
            )}

            <div className="flex gap-3">
              <button
                onClick={this.handleRetry}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              <button
                onClick={this.handleShowFeedback}
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Send Feedback
              </button>
            </div>

            {/* Feedback Dialog */}
            {this.state.showFeedback && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-slate-800 rounded-lg p-6 max-w-md w-full mx-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Send Feedback</h2>
                    <button
                      onClick={() => this.setState({ showFeedback: false })}
                      className="text-slate-400 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <form onSubmit={this.handleSubmitFeedback}>
                    <div className="mb-4">
                      <label className="block text-sm text-slate-400 mb-1">
                        Email (optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm text-slate-400 mb-1">
                        What happened?
                      </label>
                      <textarea
                        name="feedback"
                        required
                        rows={4}
                        className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="Describe what you were doing when this error occurred..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition-colors"
                    >
                      Submit Feedback
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Feedback Submitted */}
            {this.state.feedbackSubmitted && (
              <p className="mt-4 text-green-400 text-sm">
                ✓ Thank you for your feedback!
              </p>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for wrapping components with error boundary
export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallback?: ReactNode
) {
  return function WithErrorBoundaryWrapper(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
}
