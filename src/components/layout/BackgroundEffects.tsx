'use client'

import { useEffect, useState } from 'react'

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false)
  const [stars, setStars] = useState<Array<{
    left: string
    top: string
    delay: string
    opacity: number
  }>>([])

  useEffect(() => {
    setMounted(true)
    // Generate stars only on client side
    const generatedStars = Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.8 + 0.2,
    }))
    setStars(generatedStars)
  }, [])

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark mode nebula and gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-coral/20 via-violet/20 to-sunset/20 rounded-full animate-blob blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-mint/20 via-cyan-glow/20 to-golden/20 rounded-full animate-blob animation-delay-2000 blur-3xl opacity-10"></div>
      <div className="absolute top-3/4 left-3/4 w-96 h-96 bg-gradient-to-r from-pink-glow/20 via-violet/20 to-coral/20 rounded-full animate-blob animation-delay-4000 blur-3xl opacity-10"></div>

      {/* Stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-glow rounded-full animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Nebula Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sky-blue/10 rounded-full animate-pulse-slow blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-glow/5 rounded-full animate-pulse-slow blur-3xl animation-delay-1000"></div>
        <div className="absolute top-3/4 right-1/3 w-80 h-80 bg-electric-blue/8 rounded-full animate-pulse-slow blur-3xl animation-delay-2000"></div>
      </div>
    </div>
  )
}