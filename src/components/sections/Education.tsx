'use client'

import { useState, useEffect } from 'react'
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react'

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Engineering (B.E) – Computer Science and Engineering',
    school: 'Sona College of Technology',
    year: '2023 – 2027',
    location: 'Salem, India',
    gpa: '8.61 CGPA',
    description:
      'Currently pursuing Bachelor of Engineering in Computer Science and Engineering. Focused on software development, algorithms, data structures, and modern web technologies.',
    courses: [
      'Data Structures and Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Web Development',
      'Software Engineering',
      'Computer Networks',
      'Machine Learning'
    ]
  },
  {
    id: 2,
    degree: 'Higher Secondary Certificate (HSC – 12th Grade)',
    school: 'SRV Boys Higher Secondary School',
    year: '2022 – 2023',
    location: 'Salem, India',
    gpa: '93.5% (Total: 561)',
    description:
      'Completed Higher Secondary Education with excellent academic performance. Achieved an outstanding cutoff of 194.5 and 93.5% overall. Also completed 11th grade with 89% in 2021-2022.',
    courses: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Biology',
      'Computer Science',
      'English',
      'Tamil'
    ]
  },
  {
    id: 3,
    degree: 'Secondary School Leaving Certificate (SSLC – 10th Grade)',
    school: 'Christopher Matric Higher Secondary School',
    year: '2020 – 2021',
    location: 'Salem, India',
    gpa: 'All Pass',
    description:
      'Completed Secondary School Leaving Certificate with all subjects passed. Built a strong foundation in core subjects and developed interest in technology.',
    courses: [
      'Mathematics',
      'Science',
      'Social Science',
      'English',
      'Tamil',
      'Computer Science'
    ]
  }
]

export default function Education() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Prevent hydration mismatch
  }

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey and qualifications that shaped my career
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className="relative p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Content */}
                <div className="text-center">
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-3">
                      <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">{edu.degree}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.school}</h3>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
                      <Calendar size={14} />
                      <span className="text-sm">{edu.year}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
                      <MapPin size={14} />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center justify-center gap-2">
                        <Award className="text-yellow-600" size={14} />
                        <span className="font-medium text-sm">{edu.gpa}</span>
                      </div>
                    )}
                    {edu.id === 2 && (
                      <div className="mt-2 p-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg border border-yellow-300 dark:border-yellow-600">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-lg font-bold text-yellow-700 dark:text-yellow-300">194.5</span>
                          <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400">Cutoff</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{edu.description}</p>

                  {edu.courses && (
                    <div>
                      <h4 className="font-bold mb-2 text-gray-900 dark:text-white text-sm">Key Subjects</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {edu.courses.slice(0, 4).map((course) => (
                          <span key={course} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}