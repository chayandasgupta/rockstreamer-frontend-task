import { Plus } from "lucide-react";

export const WatchlistButton = ({ 
  isInWatchlist, 
  onToggle, 
  className = "" 
}) => {
  return (
    <button
      onClick={onToggle}
      className={`
        w-full bg-black/60 text-white text-sm font-semibold 
        py-3 px-2 sm:px-4 rounded-lg hover:bg-black/80 
        transition-all duration-300 flex items-center justify-center space-x-2 
        shadow-lg transform hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-white/50
        ${className}
      `}
    >
      <Plus className="w-4 h-4" />
      <span>
        {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
      </span>
    </button>
  );
};
