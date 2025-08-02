import { AlertCircle, RotateCcw } from "lucide-react";

export function DisplayError({
  title = "Error",
  error = "Something went wrong.",
  onRetry,
  layout = "vertical", 
}) {
  const baseClasses =
    "bg-gray-900 text-red-500 rounded-lg p-4 text-center border border-red-500/30 flex items-center justify-center flex-shrink-0";

  const layoutClasses =
    layout === "horizontal"
      ? "flex-col w-64"
      : "flex-col w-full max-w-md mx-auto";

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`${baseClasses} ${layoutClasses}`}
    >
      <AlertCircle className="w-8 h-8 text-red-400 mb-2" />
       <div className="text-red-400 text-md font-semibold mb-2">{title}</div>
        <p className="text-gray-400 text-sm mb-4">{error}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors duration-200"
        >
          <RotateCcw className="w-3 h-3 inline mr-1" />
          Retry
        </button>
      )}
    </div>
  );
}
