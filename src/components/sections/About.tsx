import { Download, Mail, MapPin, Calendar, Award } from 'lucide-react'
export const personalInfo = {
  email: 'kamaleshrajam2005@gmail.com',
  location: 'Salem, India',
}


export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium">{personalInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Calendar className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                    <p className="font-medium">fresher</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <div>
              <a
                href="/image/resume.png"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Story</h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Hello! I'm a passionate Full Stack Developer with expertise in building modern web applications. 
                My journey in web development started during my computer science studies, where I discovered 
                my love for creating things that live on the internet.
              </p>
              
              <p>
                I specialize in JavaScript technologies, particularly React and Node.js ecosystems. 
                I enjoy the process of turning ideas into reality through code and solving complex problems 
                with elegant solutions.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, writing technical blogs, or enjoying a good cup of coffee while planning my next project.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              
              <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">Fresher</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp</div>
              </div>
              
              <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}