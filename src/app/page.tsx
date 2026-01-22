// src/components/sections/index.tsx

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Education from '@/components/sections/Education'
import Internship from '@/components/sections/Internship'
import Skills from '@/components/sections/Skills'
import Interests from '@/components/sections/Interests'
import Projects from '@/components/sections/Projects'
import Certificates from '@/components/sections/Certificates'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Internship />
      <Skills />
      <Interests />
      <Projects />
      <Certificates />
      <Contact />
    </>
  )
}
