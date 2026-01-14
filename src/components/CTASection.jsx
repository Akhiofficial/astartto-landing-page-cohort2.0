import React from 'react'
import { Wand2, Hand } from 'lucide-react'

const CTASection = () => {
  return (
    <div className="w-full flex justify-center mt-8 md:mt-16 gap-6 relative z-10">
      <button className="border rotate-355 border-zinc-300 rounded-full px-8 py-3 text-lg font-medium hover:bg-zinc-50 transition-colors cursor-pointer">
        Create Magic
      </button>
      <button className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center relative cursor-pointer hover:bg-purple-700 transition-colors">
        <Wand2 size={24} className="text-white" />
        <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-1 rounded-full border-2 border-white">
          <Hand size={14} className="text-purple-900 fill-purple-900" />
        </div>
      </button>
    </div>
  )
}

export default CTASection