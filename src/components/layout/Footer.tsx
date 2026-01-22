'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Heart, Cpu } from 'lucide-react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setCurrentYear(new Date().getFullYear())
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <footer className="bg-navy-blue border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-cyan-glow" size={32} />
              <div>
                <p className="text-2xl font-bold bg-gradient-to-r from-sky-blue to-cyan-glow bg-clip-text text-transparent">
                  Kamalesh
                </p>
                <p className="text-gray-400">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Crafting digital experiences with modern technologies and clean code.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com" className="group">
              <div className="p-3 rounded-full bg-gradient-to-r from-sky-blue/10 to-cyan-glow/10 group-hover:from-sky-blue/20 group-hover:to-cyan-glow/20 transition-all duration-300">
                <Github className="text-gray-400 group-hover:text-white" size={24} />
              </div>
            </a>
            <a href="https://linkedin.com" className="group">
              <div className="p-3 rounded-full bg-gradient-to-r from-sky-blue/10 to-cyan-glow/10 group-hover:from-sky-blue/20 group-hover:to-cyan-glow/20 transition-all duration-300">
                <Linkedin className="text-gray-400 group-hover:text-sky-blue" size={24} />
              </div>
            </a>
            <a href="mailto:you@example.com" className="group">
              <div className="p-3 rounded-full bg-gradient-to-r from-sky-blue/10 to-cyan-glow/10 group-hover:from-sky-blue/20 group-hover:to-cyan-glow/20 transition-all duration-300">
                <Mail className="text-gray-400 group-hover:text-cyan-glow" size={24} />
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            <span className="flex items-center justify-center gap-2">
              Made with <Heart className="text-cyan-glow animate-pulse" size={16} /> © {currentYear} Kamalesh
            </span>
          </p>
          <p className="text-sm text-gray-500">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}