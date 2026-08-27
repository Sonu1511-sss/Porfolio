import React, { lazy, Suspense } from "react";
import Hero from "../Hero";
import { SectionSkeleton } from "../Skeletons";

const StatsSection = lazy(() => import("../StatsSection"));
const ExperienceSection = lazy(() => import("../ExperienceSection"));
const SkillsSection = lazy(() => import("../SkillsSdection"));
const PortfolioSection = lazy(() => import("../PortfoilioSrction"));
const Contact = lazy(() => import("../Contact"));

function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionSkeleton title="Loading stats..." />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton title="Loading experience..." />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton title="Loading skills..." />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton title="Loading portfolio..." />}>
        <PortfolioSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton title="Loading contact..." />}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Home;