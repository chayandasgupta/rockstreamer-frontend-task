import { fetchTrendingMovies } from "@/lib/api/tmdb";
import { useCallback, useEffect, useState } from "react";

export const useInfiniteScroll = (initialData = []) => {
  const [movies, setMovies] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMovies = useCallback(
    async (pageNum, reset = false) => {
      if (loading) return;

      setLoading(true);
      setError(null);

      try {
        const data = await fetchTrendingMovies(pageNum);
        setMovies((prev) => (reset ? data.results : [...prev, ...data.results]));
        setHasMore(pageNum < data.total_pages);
        setPage(pageNum);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to load movies";
        setError(errorMessage);
        console.error("Error loading movies:", err);
      } finally {
        setLoading(false);
      }
    },
    [loading]
  );

  const loadNextPage = useCallback(() => {
    if (hasMore && !loading && !error) {
      loadMovies(page + 1);
    }
  }, [hasMore, loading, error, page, loadMovies]);

  const retry = useCallback(() => {
    loadMovies(1, true);
  }, [loadMovies]);

  useEffect(() => {
    if (!initialData.length) {
      loadMovies(1, true);
    }
  }, [loadMovies, initialData.length]);

  return {
    movies,
    loading,
    error,
    hasMore,
    loadNextPage,
    retry,
  };
};
