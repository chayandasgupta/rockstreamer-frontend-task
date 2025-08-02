import { SkeletonMovieCard } from "./SkeletonMovieCard";
export const SkeletonMovieGrid = ({
  count = 6,
  animate = true,
  size = "default",
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonMovieCard
          key={`skeleton-movie-${index}`}
          animate={animate}
          size={size}
        />
      ))}
    </>
  );
};

SkeletonMovieGrid.displayName = "SkeletonMovieGrid";
