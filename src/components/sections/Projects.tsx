'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, Github, Star, Eye, Code } from 'lucide-react'

import Image from 'next/image'

export const projectsData = [
  {
    id: 1,
    title: "Modern Portfolio Website",
    description: "Personal portfolio website with modern design, animations, and dark mode support.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design",
      "Dark/Light mode toggle",
      "Smooth Framer Motion animations",
      "Modular component structure",
      "Project showcase with filtering"
    ],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com"
  },{
    id: 2,
    title: "Intelligent Leaf Disease Prediction & Pesticide Sprinkler System",
    description: "Smart India Hackathon Participant - AI-powered agricultural solution for plant disease detection and automated treatment.",
    technologies: ["Python", "CNN", "TensorFlow", "ESP32", "Servo Motor", "Relays"],
    features: [
      "CNN model for plant leaf disease detection from images",
      "Real-time disease prediction with high accuracy",
      "Automated pesticide sprinkler system integration",
      "ESP32-based hardware control with servo motors and relays"
    ],
    github: "https://github.com/yourusername/leaf-disease-prediction",
    live: "https://leaf-disease-demo.com"
  },
  {
    id: 3,
    title: "E-Learning Platform",
    description: "Comprehensive online learning management system with course creation, student enrollment, and progress tracking features.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Cloudinary"],
    features: [
      "Course creation and management for instructors",
      "Video lesson streaming with Cloudinary integration",
      "Student enrollment and progress tracking",
      "Interactive quizzes and assignments",
      "Discussion forums for each course",
      "Certificate generation upon completion"
    ],
    github: "https://github.com/yourusername/elearning-platform",
    live: "https://elearning-platform-demo.com"
  },
  {
    id: 4,
    title: "Skill Bridge & CareerForge - AI Career Platform",
    description: "AI-Powered Career Development Platform with comprehensive skill analysis and career guidance tools.",
    technologies: ["HTML", "CSS", "JavaScript", "Django", "Python", "AI/ML"],
    features: [
      "Skill profiling and gap analysis",
      "Internship matching algorithm",
      "ATS resume builder with optimization",
      "Personalized career roadmaps",
      "Technical assessments and mock interviews",
      "Analytics dashboard for progress tracking"
    ],
    github: "https://github.com/yourusername/skillbridge",
    live: "https://skillbridge-demo.com"
  },
  {
    id: 5,
    title: "Chatbot World - Multi-Purpose AI Assistant",
    description: "Comprehensive chatbot suite featuring HR assistant, symptom checker, language translator, and food recommendation system.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "NLP", "APIs"],
    features: [
      "HR chatbot for employee queries",
      "Symptom checker for health assistance",
      "Multi-language translation support",
      "Food suggestion chatbot with preferences",
      "Natural language processing integration"
    ],
    github: "https://github.com/yourusername/chatbot-world",
    live: "https://chatbot-world-demo.com"
  },
  {
    id: 6,
    title: "Smart Dustbin – IoT Waste Monitoring System",
    description: "IoT-enabled smart waste management system with real-time monitoring and web interface.",
    technologies: ["Arduino", "Ultrasonic Sensor", "Embedded C", "IoT", "Web Interface"],
    features: [
      "Real-time garbage level monitoring",
      "Ultrasonic sensor integration",
      "Web-based status dashboard",
      "Automated alerts for bin full status"
    ],
    github: "https://github.com/yourusername/smart-dustbin",
    live: "https://smart-dustbin-demo.com"
  },
  {
    id: 7,
    title: "AI-Powered Restaurant Management Website",
    description: "Intelligent restaurant management system with AI features and JSON-based data management.",
    technologies: ["HTML", "CSS", "JavaScript", "JSON", "AI Integration"],
    features: [
      "Restaurant menu management",
      "AI-powered recommendations",
      "JSON-based data persistence",
      "Responsive user interface"
    ],
    github: "https://github.com/yourusername/ai-restaurant",
    live: "https://ai-restaurant-demo.com"
  },
  {
    id: 8,
    title: "Java Chat Application",
    description: "Desktop chat application built with Java Swing, featuring real-time messaging and database integration.",
    technologies: ["Java", "Swing", "MySQL", "JDBC", "Socket Programming"],
    features: [
      "Real-time messaging",
      "MySQL database integration",
      "User authentication system",
      "Contact list management",
      "Message history storage"
    ],
    github: "https://github.com/yourusername/java-chat-app",
    live: "https://github.com/yourusername/java-chat-app"
  },
  {
    id: 9,
    title: "Clinic Appointment Management App",
    description: "Cross-platform mobile app for managing clinic appointments with Firebase backend.",
    technologies: ["Flutter", "Dart", "Firebase", "Mobile Development"],
    features: [
      "Appointment scheduling system",
      "Patient records management",
      "Firebase authentication",
      "Real-time database updates",
      "Push notifications"
    ],
    github: "https://github.com/yourusername/clinic-app",
    live: "https://clinic-app-demo.com"
  },
  {
    id: 10,
    title: "Food & Stay Finder Web App",
    description: "Location-based service finder using Leaflet.js and OpenStreetMap Overpass API.",
    technologies: ["HTML", "CSS", "JavaScript", "Leaflet.js", "Overpass API"],
    features: [
      "Interactive map integration",
      "Location-based restaurant search",
      "Accommodation finder",
      "Real-time data from Overpass API",
      "Custom markers and popups"
    ],
    github: "https://github.com/yourusername/food-stay-finder",
    live: "https://food-stay-finder.com"
  },
  {
    id: 11,
    title: "Flutter Contact Manager App",
    description: "Feature-rich contact management application built with Flutter for cross-platform compatibility.",
    technologies: ["Flutter", "Dart", "Mobile Development", "Local Storage"],
    features: [
      "Contact CRUD operations",
      "Search and filter functionality",
      "Profile pictures support",
      "Import/export contacts",
      "Call and message integration"
    ],
    github: "https://github.com/yourusername/contact-manager",
    live: "https://contact-manager-demo.com"
  },
  {
    id: 12,
    title: "Library Management System",
    description: "Comprehensive library management solution with dual implementation in Java and PHP.",
    technologies: ["Java", "PHP", "MySQL", "Web Technologies"],
    features: [
      "Book catalog management",
      "Member registration system",
      "Borrow/return tracking",
      "Fine calculation",
      "Search and filter options"
    ],
    github: "https://github.com/yourusername/library-system",
    live: "https://library-system-demo.com"
  },
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
                    {50 + ((project.id * 17) % 100)} stars
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