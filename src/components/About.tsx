'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-blue-400 text-transparent bg-clip-text">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-blue-100 mb-4">
          I&#39;m a passionate developer specialized in AI, full-stack web, Java, and mobile technologies.
        </p>
        <p className="text-lg leading-relaxed text-blue-100">
          I completed the Infosys Springboard AI Internship with 19 certifications across NLP, Computer Vision, GPT Models, and more.
        </p>
      </motion.div>
    </section>
  );
}
