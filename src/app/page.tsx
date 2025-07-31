// src/app/page.tsx
'use client';

import * as React from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Blog from '@/components/Blog';
import ScrollToTop from '@/components/ScrollToTop';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white font-sans">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center py-32 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-rose-400 to-blue-300 text-transparent bg-clip-text drop-shadow-md"
        >
      Hi, I&#39;m Kamalesh 👋
      </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-6 text-xl md:text-2xl max-w-2xl text-blue-100"
        >
          Full Stack & AI Developer — Crafting modern solutions with Java, React, Flutter, and GPT models.
        </motion.p>
        <div className="mt-8 flex gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition"
          >
            Download Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#projects"
            className="border border-blue-400 text-blue-300 px-6 py-3 rounded-full hover:bg-blue-900 transition"
          >
            View Projects
          </motion.a>
        </div>
      </section>

      <About />
      <Projects />
      <Certifications />
      <Blog />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
