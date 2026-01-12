import React from 'react'
import { MoveUpRight, Sparkles, Wand2, Hand } from 'lucide-react'
import heroPlanet from '../assets/images/hero_planet.png'
import heroHouse from '../assets/images/hero_house.png'
import CTASection from './CTASection'
import TopLeftImage from './TopLeftImage'
import BottomRightImage from './BottomRightImage'

const MainSection = () => {
    return (
        <div className='w-full min-h-[calc(100vh-80px)] relative flex flex-col items-center pt-20 overflow-hidden bg-white'>

            {/* Top Tag */}
            <p className="text-zinc-500 text-sm tracking-wide mb-6 uppercase">Igniting the Spark of Inspiration</p>

            {/* Main Headline */}
            <div className="flex flex-col items-center justify-center text-center font-bold tracking-tight text-zinc-900 leading-[1.1]">
                <div className="flex items-center gap-4 text-8xl">
                    <span>Unleash Your</span>
                </div>
                <div className="flex items-center gap-4 text-8xl mt-2">
                    <span>Brand</span>
                    <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center rotate-12">
                        <Sparkles size={32} fill="white" className="text-white" />
                    </div>
                    <span>with Our</span>
                </div>
                <div className="flex items-center gap-4 text-8xl mt-2 relative">
                    <span className="bg-yellow-200 text-purple-700 px-4 -rotate-2 inline-block">Mágico</span>
                    <span>Design</span>
                </div>
            </div>

            {/* CTA Section */}
            <CTASection />

            {/* Floating Elements */}

            {/* Top Left Image */}
            <TopLeftImage />

            {/* Bottom Right Image */}
            <BottomRightImage />

            {/* Top Right Address Tag */}
            <div className="absolute top-10 right-10 flex flex-col items-end gap-1">
                <div className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium">
                    Via della Creatività, 23
                </div>
                <div className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium">
                    20121 Milano
                </div>
            </div>

            {/* Squiggles (SVG Decoration) */}
            <svg className="absolute bottom-32 left-1/32 w-48 h-12 text-orange-400" viewBox="0 0 200 50" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M0 25 Q 25 0, 50 25 T 100 25 T 150 25 T 200 25" />
            </svg>

            <svg className="absolute bottom-24 right-1/3 w-64 h-24 text-yellow-400" viewBox="0 0 300 100" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M0 50 Q 50 100, 100 50 T 200 50 T 300 50" />
            </svg>

            

        </div>
    )
}

export default MainSection