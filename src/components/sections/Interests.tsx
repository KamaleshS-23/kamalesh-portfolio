'use client'

import { useState, useEffect } from 'react'
import { Code2, Brain, Globe, Palette, Cloud, Cpu, Zap, Rocket } from 'lucide-react'
export const interestsData = [
  {
    icon: "💻",
    title: "Web Development",
    description: "Building modern, fast and scalable web applications.",
  },
  {
    icon: "🧠",
    title: "Machine Learning",
    description: "Exploring intelligent systems and data-driven solutions.",
  },
  {
    icon: "☁️",
    title: "Cloud Computing",
    description: "Deploying scalable architectures across major cloud platforms.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Creating user-centered and visually compelling digital experiences.",
  },
  {
    icon: "⚙️",
    title: "DevOps",
    description: "Automating workflows and improving developer productivity.",
  },
  {
    icon: "🚀",
    title: "Open Source",
    description: "Contributing to community-driven software projects.",
  },
]


const interestIcons = {
  '💻': Code2,
  '🧠': Brain,
  '🔓': Globe,
  '☁️': Cloud,
  '🎨': Palette,
  '⚙️': Cpu,
  '⚡': Zap,
  '🚀': Rocket,
}

export default function Interests() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const [hoveredInterest, setHoveredInterest] = useState<number | null>(null)

  const getProgressPercent = (key: string) => {
    // Deterministic "random-looking" percent to avoid SSR/CSR hydration mismatches
    // Range: 70-99
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) >>> 0
    }
    return 70 + (hash % 30)
  }

  return (
    <section id="interests" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Areas of Interest</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and domains that excite me and drive continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interestsData.map((interest, index) => {
            const Icon = interestIcons[interest.icon as keyof typeof interestIcons] || Globe
            const progress = getProgressPercent(interest.title)
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                  hoveredInterest === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onMouseEnter={() => setHoveredInterest(index)}
                onMouseLeave={() => setHoveredInterest(null)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${
                    index % 3 === 0 ? 'bg-blue-100 dark:bg-blue-900/30' :
                    index % 3 === 1 ? 'bg-green-100 dark:bg-green-900/30' :
                    'bg-purple-100 dark:bg-purple-900/30'
                  }`}>
                    <Icon className={
                      index % 3 === 0 ? 'text-blue-600 dark:text-blue-400' :
                      index % 3 === 1 ? 'text-green-600 dark:text-green-400' :
                      'text-purple-600 dark:text-purple-400'
                    } size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {interest.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {interest.description}
                </p>

                {/* Learning Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Learning Progress</span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      {progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        index % 3 === 0 ? 'bg-blue-500' :
                        index % 3 === 1 ? 'bg-green-500' :
                        'bg-purple-500'
                      }`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Related Technologies */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-3">
                    Related Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {getRelatedTech(interest.title).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Passion Statement */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning, Always Growing</h3>
            <p className="text-blue-100">
              I believe in continuous learning and staying updated with the latest technologies. 
              Each interest area represents not just a skill, but a passion that drives me to create better solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function getRelatedTech(title: string): string[] {
  const techMap: Record<string, string[]> = {
    'Web Development': ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    'Machine Learning': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Python'],
    'Open Source': ['Git', 'GitHub', 'Contributing', 'Community'],
    'Cloud Computing': ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    'UI/UX Design': ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    'DevOps': ['CI/CD', 'Infrastructure', 'Monitoring', 'Automation'],
  }
  return techMap[title] || ['Technology', 'Tools', 'Frameworks', 'Libraries']
}