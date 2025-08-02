
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const generateTmdbImagePath = (
    path,
    size = "w500"
) => {
    if (!path) return '/placeholder.svg';

    return `${IMAGE_BASE_URL}/${size}${path}`;
};