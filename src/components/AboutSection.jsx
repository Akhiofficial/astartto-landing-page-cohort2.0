import React from 'react'
import { Sparkles } from 'lucide-react'

const AboutSection = () => {
    return (
        <div className='w-full bg-white py-16 md:py-32 flex flex-col items-center justify-center text-center px-6 md:px-20 relative'>
            <p className="text-zinc-400 text-md tracking-widest uppercase mb-10">— About Astratto</p>

            <h2 className="text-3xl md:text-5xl leading-tight font-medium text-zinc-900 max-w-5xl">
                <span className="inline-block relative">
                    {/* Yellow Curly Arrow pointing to text */}
                    <svg className="hidden md:block absolute -top-36 -left-12 w-32 h-32 text-yellow-400 rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        {/* Spiral/Curly path */}
                        <path d="M 20 40 C 30 10 80 10 80 40 C 80 70 30 60 30 45 C 30 35 50 35 75 75" />
                        {/* Arrow Head */}
                        <path d="M 65 75 L 75 75 L 78 63" />
                    </svg>
                </span>
                Our <span className="text-zinc-300">visionary</span> <span className="text-orange-500">artisans</span> collaborate seamlessly to craft
                <span className="inline-flex items-center justify-center mx-2 align-middle">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-600 rounded-full flex items-center justify-center">
                        <Sparkles size={16} className="text-white md:w-5 md:h-5" fill="white" />
                    </div>
                </span>
                inspiring <span className="text-zinc-300">experiences,</span> <span className="text-pink-500">leaving</span> lasting <span className="text-zinc-300">imprints</span> on <span className="text-purple-600">brands</span> and spaces.
                <span className="inline-block relative">
                    <Sparkles size={24} className="text-yellow-400 fill-yellow-400 absolute top-2 left-2 md:w-8 md:h-8" />
                </span>
            </h2>

            {/* Bottom Squiggle */}
            <svg className="hidden md:block absolute bottom-10 left-40 w-[450px] h-24 text-purple-700 opacity-60" viewBox="0 0 500 100" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M0 50 Q 75 10, 150 50 T 300 50 T 450 50 T 500 80" />
            </svg>

        </div>
    )
}

export default AboutSection
