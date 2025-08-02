"use client";

import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useEffect, useRef } from "react";
import { DisplayError } from "./DisplayError";
import { MovieCard } from "./movie/MovieCard";
import { ScrollContainer } from "./ScrollContainer";
import { SkeletonMovieGrid } from "./SkeletonMovieGrid";
import { EndOfContentIndicator } from "./ui/EndOfContentIndicator";

export default function MovieRow({ initialMovies }) {
  const { movies, loading, error, hasMore, loadNextPage, retry } =
    useInfiniteScroll(initialMovies);

  const observerRef = useRef();

  useEffect(() => {
    if (loading || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadNextPage();
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      }
    );

    const current = observerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, [loading, hasMore, loadNextPage]);

  if (loading && movies.length === 0 && !error) {
    return <SkeletonMovieGrid count={6} />;
  }

  return (
    <ScrollContainer>
      {movies.map((movie, index) => (
        <MovieCard
          key={`${movie.id}-${index}`}
          movie={movie}
          priority={index < 6}
        />
      ))}

      {/* Pagination Error - Show error inline */}
      {error && movies.length > 0 && (
        <DisplayError
          error="Failed to load more"
          onRetry={retry}
          layout="horizontal"
        />
      )}

      {/* Pagination Loading Skeletons */}
      {loading && movies.length > 0 && !error && (
        <SkeletonMovieGrid count={3} />
      )}

      {/* End of Content Indicator */}
      {!hasMore && !loading && !error && movies.length > 0 && (
        <EndOfContentIndicator />
      )}

      {/* Intersection Observer sentinel */}
      <div ref={observerRef} aria-hidden="true" />
    </ScrollContainer>
  );
}