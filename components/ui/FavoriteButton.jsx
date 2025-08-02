import { Heart } from "lucide-react";

export const FavoriteButton = ({ isFavorite, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`bg-black/60 rounded-full p-2.5 hover:bg-black/80 transition-colors duration-300 shadow-lg ${className}`}
    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
  >
    <Heart
      className={`w-5 h-5 transition-transform duration-300 ${
        isFavorite
          ? "text-red-500 fill-red-500 scale-110"
          : "text-white hover:text-red-400"
      }`}
    />
  </button>
);

FavoriteButton.displayName = "FavoriteButton";
