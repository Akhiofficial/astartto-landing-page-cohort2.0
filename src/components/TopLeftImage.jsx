import React from 'react'
import heroPlanet from '../assets/images/hero_planet.png'
import { Sparkles } from 'lucide-react'

const TopLeftImage = () => {
  return (
    <div>
        <div className="absolute top-20 left-20 w-64 h-64 animate-bounce-slow">
                <img src={heroPlanet} alt="3D Planet" className="w-full h-full object-cover shadow-2xl rounded-[40px_40px_100px_100px]" />
                <div className="absolute -top-4 -left-4">
                    <Sparkles className="text-yellow-400 w-8 h-8 fill-yellow-400" />
                </div>
            </div>
    </div>
  )
}

export default TopLeftImage