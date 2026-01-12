import React from 'react'
import { Sparkles } from 'lucide-react'

const AboutSection = () => {
    return (
        <div className='w-full bg-white py-32 flex flex-col items-center justify-center text-center px-20 relative'>
            <p className="text-zinc-400 text-xs tracking-widest uppercase mb-10">— About Astratto</p>

            <h2 className="text-5xl leading-tight font-medium text-zinc-900 max-w-5xl">
                <span className="inline-block relative">
                    {/* Yellow abstract squiggly icon imitation */}
                    <svg className="absolute -top-8 -left-8 w-12 h-12 text-yellow-400" viewBox="0 0 50 50" fill="currentColor">
                        <path d="M25,0 C15,0 10,10 5,15 C0,20 10,30 20,25 C30,20 40,10 50,25" fill="none" stroke="currentColor" strokeWidth="4" />
                        {/* Simple loop shape for the icon */}
                        <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10 5" />
                    </svg>
                </span>
                Our <span className="text-zinc-300">visionary</span> <span className="text-orange-500">artisans</span> collaborate seamlessly to craft
                <span className="inline-flex items-center justify-center mx-2 align-middle">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                        <Sparkles size={20} className="text-white" fill="white" />
                    </div>
                </span>
                inspiring <span className="text-zinc-300">experiences,</span> <span className="text-pink-500">leaving</span> lasting <span className="text-zinc-300">imprints</span> on <span className="text-purple-600">brands</span> and spaces.
                <span className="inline-block relative">
                    <Sparkles size={32} className="text-yellow-400 fill-yellow-400 absolute top-2 left-2" />
                </span>
            </h2>

            {/* Bottom Squiggle */}
            <svg className="absolute bottom-20 left-40 w-64 h-24 text-purple-700" viewBox="0 0 300 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0 50 Q 50 20, 100 50 T 200 50 T 300 80" />
            </svg>

        </div>
    )
}

export default AboutSection
