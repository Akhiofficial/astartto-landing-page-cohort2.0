import React from 'react'
import heroHouse from '../assets/images/hero_house.png'
import { Sparkles } from 'lucide-react'

const BottomRightImage = () => {
    return (
        <div>
            <div className="absolute bottom-20 right-10 w-80 h-80">
                <img src={heroHouse} alt="3D House" className="w-full h-full rotate-8 object-cover shadow-2xl rounded-[100px_100px_40px_40px]" />
                <div className="absolute top-0 right-10">
                    <Sparkles className="text-yellow-400 w-6 h-6 fill-yellow-400" />
                </div>
            </div>
        </div>
    )
}

export default BottomRightImage