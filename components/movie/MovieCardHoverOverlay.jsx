import { FavoriteButton } from "./FavoriteButton";
import { PlayButton } from "./PlayButton";
import { WatchlistButton } from "./WatchlistButton";

export const MovieCardHoverOverlay = ({
  isVisible,
  movie,
  isFavorite,
  onFavoriteToggle,
  onPlay,
  className = ""
}) => {
  const title = movie.title || movie.name || "Unknown Title";

  return (
    <>
      {/* Hover Background */}
      <div
        className={`
          absolute inset-0 bg-black/60 transition-opacity duration-300
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Hover Content */}
      <div
        className={`
          absolute inset-0 flex flex-col justify-between p-4 
          transition-all duration-300
          ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
          ${className}
        `}
      >
        {/* Top Right Favorite */}
        <div className="flex justify-end">
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={onFavoriteToggle}
          />
        </div>

        {/* Center Play Button */}
        <div className="flex-1 flex items-center justify-center">
          <PlayButton onPlay={onPlay} title={title} />
        </div>

        {/* Bottom Watchlist Button */}
        <div className="mb-8 sm:mb-16">
          <WatchlistButton
            isInWatchlist={isFavorite}
            onToggle={onFavoriteToggle}
          />
        </div>
      </div>
    </>
  );
};