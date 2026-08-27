import React from "react";

export function ImageSkeleton({ className = "w-full h-48" }) {
  return (
    <div
      className={`animate-pulse bg-gray-800/80 rounded-t-xl relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/30 to-transparent animate-shimmer" />
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-[#111827] rounded-xl overflow-hidden shadow-lg border border-gray-800 animate-pulse flex flex-col h-full">
      <div className="w-full h-48 bg-gray-800 relative overflow-hidden" />
      <div className="p-5 flex flex-col flex-grow">
        <div className="h-6 bg-gray-700/70 rounded w-3/4 mb-3" />
        <div className="h-4 bg-gray-800 rounded w-full mb-2" />
        <div className="h-4 bg-gray-800 rounded w-5/6 mb-4" />
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <div className="h-6 w-14 bg-gray-800 rounded-full" />
          <div className="h-6 w-14 bg-gray-800 rounded-full" />
          <div className="h-6 w-20 bg-gray-800 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function FeaturedProjectSkeleton() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-[#111827] rounded-2xl overflow-hidden border border-teal-500/30 p-6 md:p-8 animate-pulse mb-12 shadow-2xl">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2 h-64 sm:h-80 bg-gray-800 rounded-xl" />
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="h-6 w-36 bg-teal-900/50 rounded-full" />
          <div className="h-8 bg-gray-700 rounded w-4/5" />
          <div className="h-4 bg-gray-800 rounded w-full" />
          <div className="h-4 bg-gray-800 rounded w-11/12" />
          <div className="h-4 bg-gray-800 rounded w-4/5" />
          <div className="flex flex-wrap gap-2 my-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-6 w-20 bg-gray-800 rounded-full" />
            ))}
          </div>
          <div className="flex gap-4 mt-2">
            <div className="h-10 w-32 bg-gray-800 rounded-full" />
            <div className="h-10 w-32 bg-gray-800 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionSkeleton({ title = "Loading content..." }) {
  return (
    <div className="min-h-[400px] bg-[#0b0f19] text-white py-16 px-6 flex flex-col items-center justify-center">
      <div className="w-48 h-8 bg-gray-800/80 rounded-lg animate-pulse mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
    </div>
  );
}

export default SectionSkeleton;
