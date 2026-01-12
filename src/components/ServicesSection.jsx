import React from 'react'
import { MoveUpRight, ArrowLeft, ArrowRight } from 'lucide-react'
import serviceMotion from '../assets/images/service_motion.png'
import serviceAnimation from '../assets/images/service_animation.png'
import serviceIdentity from '../assets/images/service_identity.png'

const ServicesSection = () => {
    return (
        <div className="w-full bg-white rounded-t-[60px] p-20 -mt-12 relative z-20">
            {/* Header */}
            <div className="flex justify-between items-start mb-20 px-10">
                <h2 className="text-6xl font-medium text-zinc-900 tracking-tight">Our Services</h2>
                <p className="w-1/3 text-zinc-500 text-lg leading-relaxed">
                    Discover a wide range of opportunities through a comprehensive range of qualified services
                </p>
            </div>

            {/* Cards Container */}
            <div className="flex gap-10 px-10">

                {/* Card 1: Motion Graphics */}
                <div className="w-1/3 border border-purple-200 rounded-[40px] p-8 flex flex-col justify-between h-[500px] hover:border-purple-400 transition-colors bg-white group">
                    <div className="flex justify-between items-start">
                        <h3 className="text-3xl font-medium text-zinc-800 leading-tight">Motion <br /> Graphics</h3>
                        <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <MoveUpRight size={24} />
                        </div>
                    </div>

                    <p className="text-zinc-500 text-sm mt-6 mb-8">
                        Bring your ideas to life through dynamic visuals and engaging animations.
                    </p>

                    <div className="w-full h-48 rounded-[30px] overflow-hidden mt-auto">
                        <img src={serviceMotion} alt="Motion Graphics" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Card 2: 2D/3D Animation (Featured) */}
                <div className="w-1/3 bg-purple-600 rounded-[40px] p-8 flex flex-col justify-between h-[550px] relative overflow-hidden -mt-6 shadow-2xl shadow-purple-200">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-medium text-white leading-tight">2D/3D <br /> Animation</h3>

                        <p className="text-purple-100 text-sm mt-6 mb-8 w-3/4">
                            Turn imagination into reality with our stunning 2D/3D animations.
                        </p>
                    </div>

                    {/* Cutout Button Effect */}
                    <div className="absolute bottom-6 left-6 z-20">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-lg cursor-pointer hover:scale-105 transition-transform border-[6px] border-white">
                            <MoveUpRight size={32} />
                        </div>
                    </div>

                    {/* Image Area with "Cutout" Mask Illusion */}
                    <div className="absolute bottom-0 right-0 w-full h-64 rounded-b-[40px] overflow-hidden">
                        <img src={serviceAnimation} alt="Animation" className="w-full h-full object-cover mask-image-bottom" />
                        {/* White arc to simulate the cutout if needed, or just rely on the button being on top */}
                        <div className="absolute bottom-6 left-6 w-24 h-24 bg-purple-600 rounded-full -z-10 scale-110"></div>
                    </div>
                </div>

                {/* Card 3: Visual Identity */}
                <div className="w-1/3 border border-purple-200 rounded-[40px] p-8 flex flex-col justify-between h-[500px] hover:border-purple-400 transition-colors bg-white group">
                    <div className="flex justify-between items-start">
                        <h3 className="text-3xl font-medium text-zinc-800 leading-tight">Visual <br /> Identity</h3>
                        <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <MoveUpRight size={24} />
                        </div>
                    </div>

                    <p className="text-zinc-500 text-sm mt-6 mb-8">
                        Shape a unique brand persona through our comprehensive Visual Identity solutions.
                    </p>

                    <div className="w-full h-48 rounded-[30px] overflow-hidden mt-auto">
                        <img src={serviceIdentity} alt="Visual Identity" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>

            {/* Footer Controls */}
            <div className="flex justify-between items-center px-10 mt-16">
                <div className="flex gap-4">
                    <button className="text-zinc-400 hover:text-zinc-800 transition-colors"><ArrowLeft size={24} /></button>
                    <button className="text-zinc-800"><ArrowRight size={24} /></button>
                </div>
                <div className="flex gap-2">
                    <div className="w-10 h-1 bg-zinc-800 rounded-full"></div>
                    <div className="w-2 h-1 bg-zinc-200 rounded-full"></div>
                    <div className="w-2 h-1 bg-zinc-200 rounded-full"></div>
                    <div className="w-2 h-1 bg-zinc-200 rounded-full"></div>
                    <div className="w-2 h-1 bg-zinc-200 rounded-full"></div>
                </div>
            </div>

        </div>
    )
}

export default ServicesSection
