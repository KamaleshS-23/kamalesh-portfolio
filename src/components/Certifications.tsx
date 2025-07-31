'use client';
import { motion } from 'framer-motion';

export default function Certifications() {
  const items = [
    'Infosys Springboard AI Internship – AI Primer',
    'Natural Language Processing',
    'Computer Vision & Deep Learning',
    'OpenAI GPT Models + Prompt Engineering',
    'Time Management & Productivity',
    'Generative AI & RPA',
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-gradient-to-tr from-blue-950 via-blue-900 to-blue-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-blue-400 text-transparent bg-clip-text">
          Certifications
        </h2>
        <ul className="text-blue-100 list-disc list-inside text-left space-y-2 mt-8">
          {items.map((cert, i) => (
            <li key={i} className="text-lg">{cert}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
