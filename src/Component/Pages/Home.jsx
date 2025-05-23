import React from 'react'

import StatsSection from '../StatsSection'
import Hero from '../Hero'
import ExperienceSection from '../ExperienceSection'
import SkillsSdection from '../SkillsSdection'
import PortfolioSection from '../PortfoilioSrction'
import Contact from '../Contact'
import Tesimonal from '../Tesimonal'

function Home() {
  return (
   <>
   <Hero />
   <StatsSection />
   <ExperienceSection/>
   <SkillsSdection/>
   <PortfolioSection/>
   <Tesimonal/>
   <Contact/>
   </>
  )
}

export default Home