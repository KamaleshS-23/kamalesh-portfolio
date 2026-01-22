'use client'

import { useEffect, useState } from 'react'
import { Download, ChevronDown, Github, Linkedin, Mail, Sparkles, Rocket, Eye } from 'lucide-react'
import Image from 'next/image'

const floatingSkills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB']

export default function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % floatingSkills.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-20">
      {/* Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-coral/30 via-violet/30 to-cyan-glow/30 rounded-full animate-blob blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-mint/30 via-golden/30 to-pink-glow/30 rounded-full animate-blob animation-delay-2000 blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-coral/10 to-violet/10 dark:from-sky-blue/10 dark:to-cyan-glow/10 border border-coral/20 dark:border-cyan-glow/20">
              <Sparkles className="text-coral dark:text-cyan-glow" size={16} />
              <span className="text-sm font-medium text-coral dark:text-cyan-glow">
                Available for Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="gradient-text bg-gradient-to-r from-coral via-violet to-cyan-glow dark:from-sky-blue dark:via-cyan-glow dark:to-mint">
                  Kamalesh
                </span>
              </h1>
              
              <div className="inline-flex items-center gap-3 mb-6">
                <Rocket className="text-coral animate-pulse" size={24} />
                <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
                  Full Stack Developer
                </h2>
              </div>
            </div>

            {/* Skill Rotator */}
            <div className="relative h-16">
              <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
                <div className="text-xl md:text-2xl font-medium">
                  I build with{' '}
                  <span className="relative">
                    <span className="text-coral dark:text-cyan-glow font-bold">
                      {floatingSkills[currentSkill]}
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-coral to-violet dark:from-sky-blue dark:to-cyan-glow rounded-full"></div>
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Crafting beautiful, responsive, and performant web experiences with 
              modern technologies. Passionate about creating digital solutions 
              that make an impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-coral to-violet hover:from-mint hover:to-cyan-glow text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-mint to-cyan-glow rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="/resume.pdf"
                className="group px-8 py-4 rounded-xl border-2 border-coral dark:border-cyan-glow text-coral dark:text-cyan-glow font-medium hover:bg-coral/10 dark:hover:bg-cyan-glow/10 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Eye className="group-hover:animate-pulse" size={20} />
                  View Resume
                </span>
              </a>

              <a
                href="/resume.pdf"
                download
                className="group px-8 py-4 rounded-xl border-2 border-coral dark:border-cyan-glow text-coral dark:text-cyan-glow font-medium hover:bg-coral/10 dark:hover:bg-cyan-glow/10 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Download className="group-hover:animate-bounce" size={20} />
                  Download Resume
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start pt-8">
              {[
                { icon: Github, href: 'https://github.com/KamaleshS-23', color: 'hover:text-gray-900 dark:hover:text-white' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/kamalesh-s-4025a82a7', color: 'hover:text-blue-600 dark:hover:text-sky-blue' },
                { icon: Mail, href: 'mailto:kamaleshrajam2005@gmail.com', color: 'hover:text-coral dark:hover:text-cyan-glow' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-4 rounded-full bg-white/50 dark:bg-navy-blue/50 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  <social.icon className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors`} size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Avatar & Floating Elements */}
          <div className="relative">
            {/* Main Avatar Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-coral via-violet to-cyan-glow p-1">
                  <div className="w-full h-full rounded-full bg-rosey-white dark:bg-midnight-blue"></div>
                </div>
              </div>
              
              {/* Avatar Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-midnight-blue shadow-2xl">
                <Image
                  src="/image/profile.jpg"
                  alt="Kamalesh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 animate-float">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-mint to-cyan-glow text-white shadow-xl">
                  <div className="text-2xl font-bold">Fresher</div>
                  <div className="text-xs">Years Exp</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="p-4 rounded-2xl bg-gradient-to-r from-coral to-sunset text-white shadow-xl">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs">Projects</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-12 animate-float" style={{ animationDelay: '2s' }}>
                <div className="p-3 rounded-xl bg-gradient-to-r from-violet to-pink-glow text-white shadow-xl">
                  <div className="text-lg font-bold">100%</div>
                  <div className="text-xs">learner</div>
                </div>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute top-10 left-0 animate-float">
              <div className="p-3 rounded-full bg-white/80 dark:bg-navy-blue/80 backdrop-blur-sm shadow-lg">
                <div className="text-2xl">⚛️</div>
              </div>
            </div>
            
            <div className="absolute bottom-20 right-0 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="p-3 rounded-full bg-white/80 dark:bg-navy-blue/80 backdrop-blur-sm shadow-lg">
                <div className="text-2xl">🚀</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#about" className="animate-bounce">
            <div className="p-3 rounded-full bg-gradient-to-r from-coral/20 to-violet/20 dark:from-sky-blue/20 dark:to-cyan-glow/20 backdrop-blur-sm">
              <ChevronDown className="text-coral dark:text-cyan-glow" size={32} />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}