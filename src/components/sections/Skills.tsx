'use client'

import { useState } from 'react'
import { Code, Database, Server, Wrench, Globe, Layers } from 'lucide-react'

export const skillsData = {
  all: [
    { name: 'Python' },
    { name: 'Java' },
    { name: 'C' },
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Node.js' },
    { name: 'MongoDB' },
    { name: 'MySQL' },
    { name: 'Vercel' },
    { name: 'VS Code' },
    { name: 'Git & GitHub' },
  ],

  frontend: [
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'React.js' },
    { name: 'Next.js' },
    { name: 'Vue.js' },
  ],

  backend: [
    { name: 'Node.js' },
    { name: 'PHP' },
  ],

  databases: [
    { name: 'MongoDB' },
    { name: 'MySQL' },
  ],

  technology: [
    { name: 'Vercel' },
  ],

  tools: [
    { name: 'VS Code' },
    { name: 'Git & GitHub' },
  ],
}

const categories = [
  { id: 'all', name: 'All Skills', icon: Layers, gradient: 'from-violet via-pink-glow to-cyan-glow' },
  { id: 'frontend', name: 'Frontend', icon: Code, gradient: 'from-cyan-glow via-sky-blue to-electric-blue' },
  { id: 'backend', name: 'Backend', icon: Server, gradient: 'from-coral via-sunset to-golden' },
  { id: 'databases', name: 'Database', icon: Database, gradient: 'from-mint via-cyan-glow to-sky-blue' },
  { id: 'technology', name: 'Technology', icon: Globe, gradient: 'from-golden via-coral to-pink-glow' },
  { id: 'tools', name: 'Tools', icon: Wrench, gradient: 'from-violet via-coral to-golden' },
]

const skillColors = [
  'from-sky-blue to-cyan-glow',
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const currentSkills =
    skillsData[activeCategory as keyof typeof skillsData] || []

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet/5 via-transparent to-cyan-glow/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-coral/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-glow/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet via-coral to-cyan-glow bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to build modern, scalable applications
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-xl shadow-${category.gradient.split(' ')[1]}/25`
                    : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </div>
                {activeCategory === category.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
                )}
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {currentSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${skillColors[index % skillColors.length]} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-lg font-bold text-white drop-shadow-lg">
                  {skill.name}
                </h3>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
