import type { FallbackProps } from "react-error-boundary";

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const message =
    error instanceof Error
      ? error.message
      : typeof error === "string"
      ? error
      : "Unexpected error occurred";

  return (
    <div className="error-container" >
      <h2>Something went wrong.</h2>
      <pre>{message}</pre>
      <button  className="retry-btn" onClick={resetErrorBoundary}>
        Try Again
      </button>
    </div>
  );
}