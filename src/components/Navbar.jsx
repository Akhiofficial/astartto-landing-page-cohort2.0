import React from 'react'
import { MoveUpRight, Sparkles } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-6 md:px-16 py-6 border-b border-zinc-200'>
            <div className="hidden md:flex gap-14 text-sm font-medium text-zinc-800">
                <a href="#">Services</a>
                <a href="#">Work</a>
                <a href="#">About</a>
            </div>

            <div id="logo" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                    <Sparkles size={18} fill="white" />
                </div>
                <h3 className="font-bold text-xl tracking-tight">Astratto</h3>
            </div>

            <div className="flex items-center gap-10">
                <a href="#" className="hidden md:block text-sm font-medium text-zinc-800">Careers</a>
                <button className="flex items-center gap-2 border border-zinc-300 rounded-full px-5 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors cursor-pointer">
                    Contact Us <MoveUpRight size={16} />
                </button>
            </div>
        </div>
    )
}

export default Navbar