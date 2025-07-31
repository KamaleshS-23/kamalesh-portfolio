'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Chat App',
    desc: 'Java-Swing + MySQL based real-time chat with groups, friend requests, and UI validation.',
  },
  {
    title: 'Restaurant Menu Website',
    desc: 'HTML/CSS/JavaScript website for filtering food menus with a stylish responsive interface.',
  },
  {
    title: 'AI Demo Suite',
    desc: 'A collection of NLP, Computer Vision, and GPT-powered AI demos in a unified web app.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-bl from-blue-900 via-blue-800 to-blue-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 text-transparent bg-clip-text">
          Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-800/40 rounded-2xl p-6 shadow-lg backdrop-blur border border-blue-700"
          >
            <h3 className="text-2xl font-semibold text-blue-200 mb-2">{project.title}</h3>
            <p className="text-blue-100 text-md">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
