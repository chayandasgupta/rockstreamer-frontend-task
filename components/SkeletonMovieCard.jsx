import { Skeleton } from "./ui/Skeleton";
export const SkeletonMovieCard = ({
  className = "",
  animate = true,
  size = "default"
}) => {
  const sizeClasses = {
    default:
      "movie-card",
    sm: "w-40 h-60",
    md: "w-48 h-72",
    lg: "w-56 h-84",
    xl: "w-64 h-96",
  };

  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <div
        className={`relative ${sizeClasses[size]} rounded-lg overflow-hidden shadow-lg`}
      >
        {/* Movie Poster Skeleton */}
        <Skeleton
          width="100%"
          height="100%"
          className="absolute inset-0"
          rounded="lg"
          animate={animate}
        />

        {/* Bottom overlay with title and year */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-8 pb-3 px-3">
          <div className="space-y-2">
            {/* Title skeleton */}
            <div className="space-y-1">
              <Skeleton
                height="1rem"
                width="90%"
                className="bg-gray-400/30"
                rounded="sm"
                animate={animate}
              />
            </div>

            {/* Bottom row with year and rating */}
            <div className="flex items-center justify-between pt-1">
              {/* Year skeleton */}
              <Skeleton
                height="0.875rem"
                width="3rem"
                className="bg-gray-400/40"
                rounded="sm"
                animate={animate}
              />

              {/* Rating skeleton */}
              <div className="flex items-center space-x-1">
                {/* Star icon skeleton */}
                <Skeleton
                  width="1rem"
                  height="1rem"
                  className="bg-yellow-400/40"
                  rounded="sm"
                  animate={animate}
                />
                {/* Rating number skeleton */}
                <Skeleton
                  height="0.875rem"
                  width="1.5rem"
                  className="bg-gray-400/40"
                  rounded="sm"
                  animate={animate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SkeletonMovieCard.displayName = "SkeletonMovieCard";
