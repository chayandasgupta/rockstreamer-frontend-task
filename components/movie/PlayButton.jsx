import { Play } from "lucide-react";

export const PlayButton = ({ onPlay, title, className = "" }) => {
  return (
    <button
      onClick={onPlay}
      className={`
        bg-white/90 rounded-full p-2.5 sm:p-4 hover:bg-white 
        transition-all duration-300 transform hover:scale-110 shadow-2xl
        focus:outline-none focus:ring-4 focus:ring-white/50
        ${className}
      `}
      aria-label={`Play ${title}`}
    >
      <Play className="w-8 sm:w-10 h-8 sm:h-10 text-gray-800 fill-gray-800 ml-1" />
    </button>
  );
};