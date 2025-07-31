'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-blue-400 text-transparent bg-clip-text">
          Contact
        </h2>

        <div className="text-lg space-y-4 text-blue-100">
          <p>
            📧 Email: <a href="mailto:your-email@example.com" className="text-blue-300 hover:underline">your-email@example.com</a>
          </p>
          <p>
            💼 LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" className="text-blue-300 hover:underline">linkedin.com/in/yourlinkedin</a>
          </p>
          <p>
            💻 GitHub: <a href="https://github.com/yourusername" className="text-blue-300 hover:underline">github.com/yourusername</a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
