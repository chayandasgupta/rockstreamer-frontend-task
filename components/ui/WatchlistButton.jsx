import { Plus } from "lucide-react";

export const WatchlistButton = ({ isInWatchlist, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`w-full bg-black/60 text-white text-sm font-semibold py-3 px-4 rounded-lg hover:bg-black/80 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg ${className}`}
    aria-label={isInWatchlist ? "Remove from watchlist" : "Add to watchlist"}
  >
    <Plus className="w-4 h-4" />
    <span>{isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}</span>
  </button>
);

WatchlistButton.displayName = "WatchlistButton";
