import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./Components/Pages/Navbar";
import Footer from "./Components/Pages/Footer";
import Home from "./Components/Pages/Home";
import Loading from "./Components/Loading";
import { SectionSkeleton } from "./Components/Skeletons";

const PortfolioSection = lazy(() => import("./Components/PortfoilioSrction"));
const ExperienceSection = lazy(() => import("./Components/ExperienceSection"));
const SkillsSection = lazy(() => import("./Components/SkillsSdection"));
const Testimonials = lazy(() => import("./Components/Tesimonal"));
const Contact = lazy(() => import("./Components/Contact"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <Suspense fallback={<SectionSkeleton />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<PortfolioSection />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/experience" element={<ExperienceSection />} />
            <Route path="/Testimonal" element={<Testimonials />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
