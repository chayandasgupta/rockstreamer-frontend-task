import { FeaturedHeroBanner } from "@/components/hero/FeaturedHeroBanner";
import { SkeletonMovieGrid } from "@/components/SkeletonMovieGrid";
import { ManageTrendingMovie } from "@/feature/trending-movies/components/ManageTrendingMovie";
import { featuredMovie } from "@/lib/data/movies";
import { Suspense } from "react";

export const revalidate = 60;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <FeaturedHeroBanner movie={featuredMovie} />

      {/* Treanding Movies Section */}
      <section
        className="px-4 md:px-8 lg:px-12 pb-8"
        aria-label="Trending Movies"
      >
        <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
          Trending Movies {new Date().toLocaleTimeString()}
        </h2>

        <Suspense
          fallback={
            <div className="scroll-container scrollbar-hide">
              <SkeletonMovieGrid count={6} layout="scroll" />
            </div>
          }
        >
          <ManageTrendingMovie />
        </Suspense>
      </section>
    </main>
  );
}
