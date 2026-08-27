import React, { useState } from "react";
import { ImageSkeleton } from "./Skeletons";

export default function LazyImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  aspectRatio = "aspect-video",
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {!isLoaded && !hasError && (
        <ImageSkeleton className={`w-full h-full absolute inset-0 ${className}`} />
      )}
      <img
        src={src}
        alt={alt || "Image"}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setIsLoaded(true);
          setHasError(true);
        }}
        className={`transition-opacity duration-500 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
}
