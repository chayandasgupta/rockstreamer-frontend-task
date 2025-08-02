
import { TMDB_IMAGE_BASE_URL } from "@/config/tmdb";

export const generateTmdbImagePath = (
    path,
    size = "w500"
) => {
    if (!path) return '/placeholder.svg';

    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
};