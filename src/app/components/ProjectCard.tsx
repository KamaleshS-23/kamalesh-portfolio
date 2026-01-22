'use client'

import { ExternalLink, Github, Star, Zap } from 'lucide-react'

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    github: string;
    live: string;
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-pearl dark:from-navy-blue dark:to-deep-sky shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-coral via-violet to-cyan-glow opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative p-8">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                i % 3 === 0 
                  ? 'bg-coral/10 text-coral dark:bg-coral/20' 
                  : i % 3 === 1
                  ? 'bg-violet/10 text-violet dark:bg-violet/20'
                  : 'bg-mint/10 text-mint dark:bg-mint/20'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-coral dark:group-hover:text-cyan-glow transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-navy-blue/50 text-gray-700 dark:text-gray-300 hover:bg-coral hover:text-white dark:hover:bg-cyan-glow transition-all duration-300"
            >
              <Github size={18} />
              Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-coral to-violet dark:from-sky-blue dark:to-cyan-glow text-white hover:shadow-lg transition-all duration-300"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          </div>
          
          <div className="flex items-center gap-1 text-golden">
            <Zap size={18} />
            <span className="text-sm font-medium">Popular</span>
          </div>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-coral via-violet to-cyan-glow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  )
}