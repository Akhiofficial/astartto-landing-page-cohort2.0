import React from 'react'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import RecentProjectsSection from './components/RecentProjectsSection'
import FooterSection from './components/FooterSection'

const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <MainSection />
      <ServicesSection />
      <AboutSection />
      <RecentProjectsSection />
      <FooterSection />
    </div>
  )
}

export default App