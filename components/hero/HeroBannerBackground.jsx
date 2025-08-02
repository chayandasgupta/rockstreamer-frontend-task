"use client";

import Image from "next/image";
import { useState } from "react";

export const HeroBannerBackground = ({ title, backdropUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="absolute inset-0">
      <div
        className={`relative w-full h-full transition-opacity duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={backdropUrl}
          alt={title}
          fill
          className="object-cover object-center scale-105 transition-transform duration-[20s] hover:scale-110"
          priority
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      {/* Mobile-optimized Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40 sm:from-black/90 sm:via-black/60 sm:to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50 sm:from-black/80 sm:to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-purple-900/30 sm:from-black/40 sm:to-purple-900/20" />
      {/* Bottom fade - stronger on mobile */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-black via-black/70 to-transparent sm:via-black/50" />
    </div>
  );
};
