import { HeroBannerBackground } from "@/components/hero/HeroBannerBackground";
import { HeroContent } from "./HeroContent";


export const FeaturedHeroBanner = ({ movie }) => {
  return (
    <section className="relative overflow-hidden py-16">
      <HeroBannerBackground
        title={movie.title}
        backdropUrl={movie.backdropUrl}
      />
      <HeroContent movie={movie} />
    </section>
  );
};

FeaturedHeroBanner.displayName = "FeaturedHeroBanner";
