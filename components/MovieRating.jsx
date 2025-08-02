import { Star } from "lucide-react";

const getRatingColor = (rating) => {
  if (rating >= 8) return "text-green-400";
  if (rating >= 6) return "text-yellow-400";
  return "text-orange-400";
};

export const MovieRating = ({ rating, className = "" }) => {
  if (!rating) return null;

  const displayRating = Number(rating).toFixed(1);
  const colorClass = getRatingColor(parseFloat(displayRating));

  return (
    <div className={`flex items-center space-x-1 ${colorClass} ${className}`}>
      <Star className="w-4 h-4 fill-current drop-shadow-md" />
      <span className="text-sm font-semibold drop-shadow-md">
        {displayRating}
      </span>
    </div>
  );
};