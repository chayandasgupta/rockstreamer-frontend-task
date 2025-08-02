import { DisplayError } from "@/components/DisplayError";
import MovieRow from "@/components/MovieRow";
import { fetchTrendingMovies } from "@/lib/api/tmdb";

const getTrendingMovies = async () => {
  try {
    const {results: trendingMovies} = await fetchTrendingMovies();
    return trendingMovies;
  } catch (error) {
    console.error("Failed to fetch trending movies", error);
  }
};

export const ManageTrendingMovie = async () => {
  const trendingMovies = await getTrendingMovies();
  if (!trendingMovies) {
    return <DisplayError error="Failed to load trending movies. Please try again later"/>;
  }

  return <MovieRow key="trending" initialMovies={trendingMovies} />;
};
