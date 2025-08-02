"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

const FALLBACK_IMAGE = "/placeholder-movieimage.png";

export const MoviePoster = ({ 
  src, 
  alt, 
  priority = false, 
  className = "",
  onLoad,
  onError 
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleError = useCallback(() => {
    setImageError(true);
    onError?.();
  }, [onError]);

  const handleLoad = useCallback(() => {
    setImageLoaded(true);
    onLoad?.();
  }, [onLoad]);

  return (
    <>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 animate-pulse" />
      )}
      <Image
        src={imageError ? FALLBACK_IMAGE : src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className={`object-cover transition-transform duration-300 ${className}`}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
      />
    </>
  );
};