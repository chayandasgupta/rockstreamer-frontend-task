import { Heart } from "lucide-react";

export const FavoriteButton = ({ 
  isFavorite, 
  onToggle, 
  className = "",
  size = "w-5 h-5" 
}) => {
  return (
    <button
      onClick={onToggle}
      className={`
        bg-black/60 rounded-full p-2.5 hover:bg-black/80 
        transition-all duration-300 shadow-lg transform hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-white/50
        ${className}
      `}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart
        className={`
          ${size} transition-all duration-300
          ${isFavorite
            ? "text-red-500 fill-red-500 scale-110"
            : "text-white hover:text-red-400"
          }
        `}
      />
    </button>
  );
};