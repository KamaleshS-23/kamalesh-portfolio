// Personal Information
export const personalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  email: "your.email@example.com",
  phone: "+1 (123) 456-7890",
  location: "San Francisco, CA",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
}

// Education Data
export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    year: "2020 - 2024",
    gpa: "3.9/4.0",
    description: "Specialized in Web Development and Machine Learning. Completed courses in Data Structures, Algorithms, Database Systems, and Cloud Computing.",
    courses: ["Advanced Web Development", "Machine Learning", "Distributed Systems", "UI/UX Design"]
  },
  {
    id: 2,
    degree: "High School Diploma",
    school: "Tech High School",
    location: "San Jose, CA",
    year: "2016 - 2020",
    description: "Focus on Mathematics and Computer Science. President of Coding Club.",
    achievements: ["National Coding Competition Winner", "AP Scholar with Distinction"]
  }
]

// Skills Data
export const skillsData = {
  programming: [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "Java", level: 80 },
  ],
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "HTML/CSS", level: 98 },
    { name: "Tailwind CSS", level: 92 },
  ],
  backend: [
    { name: "Node.js", level: 88 },
    { name: "Express", level: 85 },
    { name: "MongoDB", level: 82 },
    { name: "PostgreSQL", level: 80 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Figma", level: 65 },
  ]
}

// Interests Data
export const interestsData = [
  {
    title: "Web Development",
    description: "Building modern, responsive web applications with cutting-edge technologies",
    icon: "💻"
  },
  {
    title: "Machine Learning",
    description: "Exploring AI/ML applications and neural networks for real-world problems",
    icon: "🧠"
  },
  {
    title: "Open Source",
    description: "Contributing to open-source projects and building developer tools",
    icon: "🔓"
  },
  {
    title: "Cloud Computing",
    description: "Designing scalable architectures on AWS, Azure, and Google Cloud",
    icon: "☁️"
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces",
    icon: "🎨"
  },
  {
    title: "DevOps",
    description: "Automating deployments and building CI/CD pipelines",
    icon: "⚙️"
  }
]

// Projects Data
export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.com",
    image: "/projects/ecommerce.jpg",
    features: [
      "User authentication & authorization",
      "Real-time inventory updates",
      "Secure payment processing",
      "Admin dashboard with analytics"
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team collaboration features",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/yourusername/taskapp",
    live: "https://taskapp-demo.com",
    image: "/projects/taskapp.jpg",
    features: [
      "Drag-and-drop interface",
      "Real-time collaboration",
      "File attachments",
      "Progress tracking"
    ]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather application with detailed forecasts and interactive maps",
    technologies: ["React", "OpenWeather API", "Chart.js", "Mapbox"],
    github: "https://github.com/yourusername/weather",
    live: "https://weather-demo.com",
    image: "/projects/weather.jpg",
    features: [
      "Real-time weather updates",
      "7-day forecast",
      "Interactive maps",
      "Location-based services"
    ]
  }
]

// Certificates Data
export const certificatesData = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SA-12345",
    link: "https://aws.amazon.com/certification",
    skills: ["AWS", "Cloud Architecture", "Security", "Networking"]
  },
  {
    id: 2,
    title: "Google Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-DE-67890",
    link: "https://cloud.google.com/certification",
    skills: ["Data Engineering", "BigQuery", "Dataflow", "Pub/Sub"]
  },
  {
    id: 3,
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2022",
    credentialId: "AZ-900-12345",
    link: "https://learn.microsoft.com/certifications",
    skills: ["Azure", "Cloud Concepts", "Security", "Pricing"]
  },
  {
    id: 4,
    title: "React Advanced Patterns",
    issuer: "Frontend Masters",
    date: "2022",
    credentialId: "REACT-ADV-456",
    link: "https://frontendmasters.com",
    skills: ["React", "Performance", "Patterns", "Best Practices"]
  }
]