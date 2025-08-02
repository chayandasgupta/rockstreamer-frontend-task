"use server";

import {
  TMDB_API_BASE_URL,
  TMDB_API_KEY
} from '@/config/tmdb';

export const fetchTrendingMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${TMDB_API_BASE_URL}/trending/all/day?api_key=${TMDB_API_KEY}&page=${page}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};
