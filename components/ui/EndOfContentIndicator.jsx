import { cn } from "@/lib/utils";
export const EndOfContentIndicator = () => {
  return (
    <div
      className={cn(
        "flex-shrink-0 flex items-center justify-center w-48 h-72 text-gray-400",
        className
      )}
    >
      <div className="text-center">
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

EndOfContentIndicator.displayName = "EndOfContentIndicator";
