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
        <div className='w-full min-h-screen bg-white rounded-t-[60px] p-20 -mt-12 relative z-30'>
            {/* Header */}
            <div className="flex justify-between items-start mb-20 px-10">
                <h2 className="text-6xl font-medium text-zinc-900 tracking-tight">Recent Projects</h2>
                <p className="w-1/3 text-zinc-500 text-lg leading-relaxed text-right">
                    Step into the world of our most recent projects, a showcase of our unwavering commitment to progressive design
                </p>
            </div>

            {/* Projects Grid with Staggered Layout */}
            <div className="flex gap-20 px-10">
                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-24">
                    {projectsLeft.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                {/* Right Column (Offset Down) */}
                <div className="flex-1 flex flex-col gap-24 pt-32">
                    {projectsRight.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default RecentProjectsSection
