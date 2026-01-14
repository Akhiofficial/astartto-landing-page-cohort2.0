import React from 'react'
import ProjectCard from './ProjectCard'

// Import Images
import lighthouseImg from '../assets/images/project_lighthouse.png'
import snowscapeImg from '../assets/images/project_snowscape.png'
import compassImg from '../assets/images/project_compass.png'
import windowImg from '../assets/images/project_window.png'

const RecentProjectsSection = () => {

    // Project Data
    const projectsLeft = [
        {
            image: lighthouseImg,
            tag: "2D Animation",
            title: "The Lighthouse",
            description: "Adding a new dimension to projects through thoughtfully designed 2D animations"
        },
        {
            image: compassImg,
            tag: "Motion Graphics",
            title: "Navigating Possibilities",
            description: "Motion graphics breathe life into the project, blending direction and creativity"
        }
    ];

    const projectsRight = [
        {
            image: snowscapeImg,
            tag: "Visual Identity",
            title: "Snowscape Haven",
            description: "Crafting a visual identity that mirrors the serenity and allure of a winter sanctuary"
        },
        {
            image: windowImg,
            tag: "3D Animation",
            title: "Nocturnal Symphony",
            description: "Through 3D artistry, we orchestrate an animated ode to the evening, a dance of shadows and dreams"
        }
    ];

    return (
        <div className='w-full min-h-screen bg-white rounded-t-[30px] md:rounded-t-[60px] px-6 py-10 md:p-20 -mt-12 relative z-30'>
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-20 px-0 md:px-10 gap-6 md:gap-0">
                <h2 className="text-4xl md:text-6xl font-medium text-zinc-900 tracking-tight">Recent Projects</h2>
                <p className="w-full md:w-1/3 text-zinc-500 text-lg leading-relaxed text-left md:text-right">
                    Step into the world of our most recent projects, a showcase of our unwavering commitment to progressive design
                </p>
            </div>

            {/* Projects Grid with Staggered Layout */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 px-0 md:px-10">
                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-16 md:gap-24">
                    {projectsLeft.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                {/* Right Column (Offset Down) */}
                <div className="flex-1 flex flex-col gap-16 md:gap-24 pt-0 md:pt-32">
                    {projectsRight.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default RecentProjectsSection
