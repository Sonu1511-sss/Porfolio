import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import Footer from "./Components/Pages/Footer";
import PortfolioSection from "./Components/PortfoilioSrction";
import ExperienceSection from "./Components/ExperienceSection";
import Testimonials from "./Components/Tesimonal";
import SkillsSection from "./Components/SkillsSdection";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<PortfolioSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/Testimonal" element={<Testimonials />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
