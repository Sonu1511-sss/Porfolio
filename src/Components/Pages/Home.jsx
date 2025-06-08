import React from 'react'
import Hero from '../Hero'
import StatsSection from '../StatsSection'
import ExperienceSection from '../ExperienceSection'
import Testimonials from '../Tesimonal'
import Contact from '../Contact'
import SkillsSection from '../SkillsSdection'
import PortfolioSection from '../PortfoilioSrction'



function Home() {
  return (
    <>
    <Hero/>
   <StatsSection />
   <ExperienceSection/>
   <SkillsSection/>
   <PortfolioSection/>
   <Testimonials/>
  
   <Contact/>
    </>
   
  )
}

export default Home