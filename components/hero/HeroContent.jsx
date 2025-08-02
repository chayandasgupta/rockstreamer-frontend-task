import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { Info, Play, Star } from "lucide-react";

export const HeroContent = ({ movie }) => {
  if (
    !movie ||
    typeof movie !== "object" ||
    Object.keys(movie).length === 0
  )
    return null;

  const { title, overview, rating, year, genre = [], duration } = movie;

  const genreTags = Array.isArray(genre)
    ? genre.slice(0, 3).map((g, index) => (
        <Tag key={`${g}-${index}`} aria-label={`Genre: ${g}`}>
          {g}
        </Tag>
      ))
    : null;

  return (
    <div className="base-content relative z-10 h-full flex items-center justify-center sm:justify-start">
      <div className="max-w-full sm:max-w-4xl text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Tag
            icon={
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
            }
            className="gap-1.5"
            aria-label={`Rating: ${rating} stars`}
          >
            {rating}
          </Tag>
          <Tag aria-label={`Release year: ${year}`}>{year}</Tag>
          <Tag aria-label={`Duration: ${duration}`}>{duration}</Tag>
          {genreTags}
        </div>

        <h1 className="text-white font-bold mb-4 sm:mb-6 leading-tight text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
            {title}
          </span>
        </h1>
        <p className="text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-full sm:max-w-2xl mx-auto sm:mx-0 text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-0">
          {overview}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start px-4 sm:px-0">
          <Button
            variant="primary"
            icon={<Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />}
            aria-label="Play movie"
            fullWidth
          >
            Play Now
          </Button>

          <Button
            variant="secondary"
            icon={<Info className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
            aria-label="More information about the movie"
            fullWidth
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

HeroContent.displayName = "HeroContent";
