'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react'
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true) // Start with dark mode as default
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mounted && darkMode) {
      document.documentElement.classList.add('dark')
    } else if (mounted && !darkMode) {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode, mounted])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-midnight-blue/80 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-coral to-violet group-hover:from-mint group-hover:to-cyan-glow transition-all duration-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-coral to-violet rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <Sparkles className="absolute -top-1 -right-1 text-golden animate-pulse" size={16} />
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-coral via-violet to-cyan-glow bg-clip-text text-transparent">
                Kamalesh
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Developer</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-700 dark:text-gray-300 hover:text-coral dark:hover:text-cyan-glow transition-colors font-medium group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-coral to-violet group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-full bg-gradient-to-r from-soft-peach to-pearl dark:from-deep-sky dark:to-navy-blue shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              {darkMode ? (
                <Sun className="text-golden" size={20} />
              ) : (
                <Moon className="text-violet" size={20} />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-full bg-gradient-to-r from-soft-peach to-pearl dark:from-deep-sky dark:to-navy-blue shadow-lg"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-lg bg-gradient-to-r from-cotton-candy to-pearl dark:from-sky-blue/20 dark:to-cyan-glow/20"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-6 pb-6 animate-fadeIn">
            <div className="flex flex-col gap-4 bg-white/80 dark:bg-navy-blue/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-4 rounded-lg text-gray-800 dark:text-white hover:bg-gradient-to-r from-coral/10 to-violet/10 dark:from-sky-blue/10 dark:to-cyan-glow/10 hover:text-coral dark:hover:text-cyan-glow transition-all duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}