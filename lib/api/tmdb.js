"use server";

const API_KEY = "c31dce7dae483b752a1adfcb2a791674";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${page}`
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
