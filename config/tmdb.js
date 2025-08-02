const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

// API Versions
const TMDB_API_VERSION = 3;

// Base URLs
const TMDB_API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "https://image.tmdb.org/t/p";

export {
  TMDB_API_BASE_URL,
  TMDB_API_KEY,
  TMDB_API_VERSION,
  TMDB_IMAGE_BASE_URL
};

