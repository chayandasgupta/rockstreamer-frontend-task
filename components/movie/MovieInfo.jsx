import { MovieRating } from "./MovieRating";
export const MovieInfo = ({ movie, showYear = true }) => {
  const title = movie.title || movie.name || "Unknown Title";
  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : movie.first_air_date
    ? new Date(movie.first_air_date).getFullYear()
    : "N/A";

  return (
    <div className="space-y-1">
      <div className="text-white text-base font-bold leading-tight drop-shadow-lg line-clamp-2">
        {title}
      </div>
      <div className="flex items-center justify-between">
        {showYear && (
          <p className="text-gray-200 text-sm font-medium drop-shadow-md">
            {releaseYear}
          </p>
        )}
        <MovieRating rating={movie.vote_average} />
      </div>
    </div>
  );
};