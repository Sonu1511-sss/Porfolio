import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./Components/Pages/Navbar";
import Footer from "./Components/Pages/Footer";
import PortfolioSection from "./Components/PortfoilioSrction";
import ExperienceSection from "./Components/ExperienceSection";
import Testimonials from "./Components/Tesimonal";
import SkillsSection from "./Components/SkillsSdection";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Contact";
import Loading from "./Components/Loading";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<PortfolioSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/Testimonal" element={<Testimonials />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
