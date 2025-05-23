import { Home } from 'lucide-react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Pages/Navbar';
import Footer from './Components/Pages/Footer';
import PortfolioSection from './Components/PortfoilioSrction';
import ExperienceSection from './Components/ExperienceSection';
import Testimonials from './Components/Tesimonal';
import SkillsSection from './Components/SkillsSdection';


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={} />
        <Route path="/work" element={<PortfolioSection />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/experience" element={<ExperienceSection />} />
        <Route path="/Testimonal" element={<Testimonials />} />

      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
