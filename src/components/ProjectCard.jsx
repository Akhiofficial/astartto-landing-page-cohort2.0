import React from 'react'
import { MoveUpRight } from 'lucide-react'

const ProjectCard = ({ image, title, description, tag }) => {
    return (
        <div className='flex flex-col gap-4 group cursor-pointer'>
            {/* Image Container */}
            <div className='relative w-full aspect-square rounded-[50px] overflow-hidden'>
                <img src={image} alt={title} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105' />

                {/* Top Right Arrow Button - Appears/Moves on Hover? Matches design. */}
                <div className='absolute top-6 right-6 w-20 h-20 bg-white rounded-full flex items-center justify-center text-zinc-900 transition-transform duration-300 group-hover:rotate-45'>
                    <MoveUpRight size={32} />
                </div>

                {/* Bottom Left Tag Pill */}
                <div className='absolute bottom-10 left-10 py-3 px-8 bg-white/90 backdrop-blur-sm rounded-full'>
                    <span className='text-zinc-900 font-medium text-lg'>{tag}</span>
                </div>
            </div>

            {/* Text Content */}
            <div className='mt-2'>
                <h3 className='text-4xl font-medium text-fuchsia-600 mb-3'>{title}</h3>
                <p className='text-zinc-500 text-lg leading-relaxed w-3/4'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard
