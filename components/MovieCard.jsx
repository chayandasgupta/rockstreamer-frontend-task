"use client";

import { generateTmdbImagePath } from "@/lib/tmdb-image-path";
import { memo, useCallback, useState } from "react";
import { MovieCardHoverOverlay } from "./MovieCardHoverOverlay";
import { MovieInfo } from "./MovieInfo";
import { MoviePoster } from "./MoviePoster";

export const MovieCard = memo(({ movie = {}, priority = false }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const posterUrl = generateTmdbImagePath(
    movie.poster_path || movie.backdrop_path,
    "w342"
  );
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const title = movie.title || movie.name || "Unknown Title";

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className="relative flex-shrink-0 cursor-pointer transition-all duration-300 group"
      style={{
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      aria-label={`Play ${title}`}
    >
      <div className="movie-card relative rounded-lg overflow-hidden shadow-lg">
        {/* Movie Poster */}
        <MoviePoster
          src={posterUrl}
          alt={movie.title || movie.name || "Unknown Title"}
          priority={priority}
          className={isHovered ? "scale-110" : "scale-100"}
        />

        {/* Enhanced Bottom title & year (always visible) */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-8 pb-3 px-3">
          <MovieInfo movie={movie} />
        </div>

        {/* Hover Overlay */}
        <MovieCardHoverOverlay
          isVisible={isHovered}
          movie={movie}
          isFavorite={isFavorite}
          onFavoriteToggle={handleFavoriteToggle}
        />
      </div>
    </div>
  );
});

MovieCard.displayName = "MovieCard";
