import React from 'react'
import { Sparkles, Linkedin, Instagram, Twitter } from 'lucide-react'

const FooterSection = () => {
    return (
        <div className='w-[95%] md:w-[98%] mx-auto bg-white rounded-[30px] md:rounded-[60px] px-6 md:px-20 pt-16 md:pt-32 pb-10 -mt-12 relative z-40 flex flex-col items-center text-center border-2 border-zinc-300'>

            {/* Top Tagline */}
            <p className="text-fuchsia-600 font-medium mb-10">Open the door to forging your brand's story</p>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium text-zinc-900 leading-tight max-w-5xl relative">
                {/* Decorative Stars Top Left */}
                <div className="hidden md:block absolute -top-16 -left-20">
                    <Sparkles size={64} className="text-yellow-400 fill-yellow-400 rotate-12" />
                    <Sparkles size={32} className="text-yellow-400 fill-yellow-400 absolute top-0 -right-8" />
                </div>

                Embark on a Transformative Journey <br />
                Shaping <span className="inline-block rotate-2 bg-yellow-400 px-4 rounded-full text-white mx-2">Your Brand's Destiny</span> Through Our <br />
                Dedicated Partnership

                {/* Circular Badge Right */}
                <div className="hidden lg:flex absolute top-20 -right-24 w-32 h-32 bg-purple-600 rounded-full items-center justify-center animate-spin-slow">
                    {/* Simple representation of the circular text badge */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 100 100">
                            <defs>
                                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text fill="white" fontSize="10" letterSpacing="2">
                                <textPath href="#circlePath" startOffset="0%">
                                    LET'S GET STARTED • LET'S GET STARTED •
                                </textPath>
                            </text>
                        </svg>
                        <Sparkles size={32} className="text-yellow-400 fill-yellow-400" />
                    </div>
                </div>
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-400 mt-10 md:mt-16 max-w-2xl text-base md:text-lg leading-relaxed mb-16 md:mb-32">
                Join us on a transformative journey to shape your brand's destiny through our dedicated partnership, crafting a narrative that resonates
            </p>

            {/* Footer Divider */}
            <div className="w-full h-px bg-zinc-200 mb-10"></div>

            {/* Footer Content */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center text-zinc-400 text-sm gap-6 md:gap-0">
                <p>Via della Creatività, 23, 20121 Milano</p>

                <div className="flex gap-6">
                    <a href="#" className="hover:text-zinc-900 transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="hover:text-zinc-900 transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="hover:text-zinc-900 transition-colors"><Instagram size={20} /></a>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                    <a href="#" className="hover:text-zinc-900 transition-colors">Privacy & Cookie Policy</a>
                    <p>Astratto © 2023</p>
                </div>
            </div>

        </div>
    )
}

export default FooterSection
