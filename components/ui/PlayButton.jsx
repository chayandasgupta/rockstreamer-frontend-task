import { Play } from "lucide-react";

export const PlayButton = ({ onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`bg-white/90 rounded-full p-4 hover:bg-white transition-colors duration-300 shadow-2xl group ${className}`}
    aria-label="Play movie"
  >
    <Play className="w-10 h-10 text-gray-800 fill-gray-800 ml-1 group-hover:scale-110 transition-transform duration-300" />
  </button>
);

PlayButton.displayName = "PlayButton";
