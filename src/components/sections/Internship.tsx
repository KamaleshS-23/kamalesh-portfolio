'use client'

import { useState, useEffect } from 'react'
import { Calendar, MapPin, Building, Briefcase, Code } from 'lucide-react'

const internshipData = [
  {
    id: 1,
    role: 'Full Stack Developer Intern',
    company: 'TechCorp Solutions',
    duration: 'June 2024 – August 2024',
    location: 'Bangalore, India',
    type: 'Remote',
    description:
      'Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with senior developers on agile development processes and implemented responsive UI components.',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Express.js',
      'Tailwind CSS',
      'Git'
    ],
    achievements: [
      'Built 3+ responsive web applications',
      'Improved application performance by 40%',
      'Collaborated with cross-functional teams'
    ]
  },
  {
    id: 2,
    role: 'Frontend Developer Intern',
    company: 'StartupXYZ',
    duration: 'January 2024 – March 2024',
    location: 'Chennai, India',
    type: 'On-site',
    description:
      'Worked on frontend development using modern JavaScript frameworks. Implemented user interfaces, optimized performance, and participated in code reviews and team meetings.',
    technologies: [
      'JavaScript',
      'React',
      'CSS3',
      'HTML5',
      'Figma',
      'GitHub'
    ],
    achievements: [
      'Developed pixel-perfect UI components',
      'Reduced bundle size by 25%',
      'Mentored junior interns'
    ]
  },
  {
    id: 3,
    role: 'Software Engineering Intern',
    company: 'InnovateLabs',
    duration: 'May 2023 – July 2023',
    location: 'Hyderabad, India',
    type: 'Hybrid',
    description:
      'Contributed to backend development and API design. Learned about microservices architecture, database optimization, and deployment pipelines.',
    technologies: [
      'Python',
      'Django',
      'PostgreSQL',
      'Docker',
      'AWS',
      'Jenkins'
    ],
    achievements: [
      'Designed and implemented REST APIs',
      'Automated deployment processes',
      'Improved database query performance'
    ]
  }
]

export default function Internship() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Prevent hydration mismatch
  }

  return (
    <section id="internship" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet via-coral to-cyan-glow bg-clip-text text-transparent">
            Internship Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet to-cyan-glow mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional experience gained through internships and practical projects
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {internshipData.map((internship, index) => (
              <div
                key={internship.id}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700"
              >
                {/* Timeline connector */}
                {index !== internshipData.length - 1 && (
                  <div className="absolute left-8 bottom-0 w-0.5 h-8 bg-gradient-to-b from-cyan-glow to-transparent"></div>
                )}

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-br from-violet to-pink-glow rounded-lg">
                        <Briefcase className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {internship.role}
                        </h3>
                        <div className="flex items-center gap-2 text-lg text-violet dark:text-cyan-glow font-semibold">
                          <Building size={16} />
                          {internship.company}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{internship.location}</span>
                    </div>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      internship.type === 'Remote'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : internship.type === 'On-site'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                    }`}>
                      {internship.type}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {internship.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="text-cyan-glow" size={16} />
                    <h4 className="font-bold text-gray-900 dark:text-white">Technologies Used</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-sky-blue to-cyan-glow text-white rounded-full text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-coral rounded-full"></span>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {internship.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-cyan-glow rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}