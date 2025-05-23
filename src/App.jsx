import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Pages/Home';
import PortfolioSection from './Component/PortfoilioSrction';
import SkillsSection from './Component/SkillsSdection';
import ExperienceSection from './Component/ExperienceSection';
import Tesimonal from './Component/Tesimonal';

import Navbar from './Component/Pages/Navbar';
import Footer from './Component/Pages/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<PortfolioSection />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/experience" element={<ExperienceSection />} />
        <Route path="/Testimonal" element={<Tesimonal />} />

      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
