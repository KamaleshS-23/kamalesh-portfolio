'use client';
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 bg-gradient-to-bl from-blue-900 via-blue-800 to-blue-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-300 to-blue-400 text-transparent bg-clip-text">
          Blog
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'How I Built My Portfolio with Next.js',
              desc: 'Step-by-step guide on how this portfolio was built using modern tech stack.',
            },
            {
              title: 'Exploring GPT Models',
              desc: 'Beginner-friendly article about how GPT models work and how to use them.',
            },
          ].map((post, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl bg-blue-800/40 p-6 border border-blue-700 shadow-md"
            >
              <h3 className="text-2xl font-semibold text-blue-200 mb-2">{post.title}</h3>
              <p className="text-blue-100">{post.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
