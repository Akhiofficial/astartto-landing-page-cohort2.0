import React from 'react'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'

const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <MainSection />
      <ServicesSection />
      <AboutSection />
    </div>
  )
}

export default App