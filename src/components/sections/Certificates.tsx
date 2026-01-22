'use client'

import { useState, useEffect } from 'react'
import { Award, Calendar, ExternalLink, Eye, Download, CheckCircle } from 'lucide-react'

// ✅ Local certificates data (import removed)
const certificatesData = [
  {
    id: 1,
    title: "Frontend Development",
    issuer: "Coursera",
    date: "2023",
    credentialId: "FD-2023-001",
    link: "https://example.com",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2024",
    credentialId: "RCT-2024-021",
    link: "https://example.com",
    skills: ["React", "Hooks", "State Management"],
  },
  {
    id: 3,
    title: "UI/UX Design Basics",
    issuer: "Google",
    date: "2022",
    credentialId: "UX-2022-112",
    link: "https://example.com",
    skills: ["Figma", "Wireframing", "User Testing"],
  },
  {
    id: 4,
    title: "Full Stack Development",
    issuer: "Udemy",
    date: "2023",
    credentialId: "FS-2023-456",
    link: "https://example.com",
    skills: ["Node.js", "Express", "MongoDB"],
  }
]

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Certificates</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications validating my skills and knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                selectedCertificate === cert.id ? 'ring-2 ring-blue-500' : ''
              }`}

              onClick={() => setSelectedCertificate(cert.id === selectedCertificate ? null : cert.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <Award className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={14} />
                  {cert.date}
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{cert.issuer}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                  ID: {cert.credentialId}
                </span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Eye size={16} />
                </a>
              </div>

              {selectedCertificate === cert.id && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">Validated Skills</h4>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full flex items-center gap-1"
                      >
                        <CheckCircle size={12} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* MODAL — unchanged */}
        {/* (Your modal code stays exactly the same, using certificatesData) */}

      </div>
    </section>
  )
}
