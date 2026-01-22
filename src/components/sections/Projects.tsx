'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, Github, Star, Eye, Code } from 'lucide-react'

import Image from 'next/image'

export const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern personal portfolio built using Next.js & Tailwind CSS.",
    technologies: ["Next.js", "React", "Tailwind", "TypeScript"],
    features: [
      "Responsive design",
      "Dark/Light mode",
      "Smooth animations",
      "Modular component structure"
    ],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourwebsite.com"
  },
  {
    id: 2,
    title: "E-Commerce App",
    description: "Full-stack shopping platform with authentication & cart system.",
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "JWT Authentication",
      "Product filtering",
      "Stripe payments"
    ],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather dashboard using OpenWeather API.",
    technologies: ["Next.js", "API", "Tailwind"],
    features: [
      "Live weather updates",
      "Search by city",
      "Custom UI visualizations"
    ],
    github: "https://github.com/yourusername/weather-app",
    live: "https://weather-demo.com"
  }
]

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'React']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(activeFilter.toLowerCase())
        )
      )

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code size={64} className="text-white/20" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Live Preview Button */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Eye size={20} />
                    Live Preview
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 dark:text-white">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-1 text-yellow-600">
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">4.8</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {Math.floor(Math.random() * 100) + 50} stars
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            View All Projects on GitHub
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}