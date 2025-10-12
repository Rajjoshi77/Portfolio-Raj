"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
  <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4 py-10">
      
      {/* Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-cyan-400 mb-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Introduction */}
      <motion.p
        className="max-w-2xl text-center text-lg md:text-xl text-gray-700 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
  Hi! I’m <span className="font-semibold text-cyan-400">Raj</span>, a passionate developer who loves creating interactive and visually stunning web experiences. I specialize in <span className="font-semibold text-cyan-300">frontend development</span>, <span className="font-semibold text-cyan-300">UI/UX design</span>, and building modern web applications with <span className="font-semibold text-cyan-300">Next</span> and <span className="font-semibold text-cyan-300">Tailwind CSS</span>.
      </motion.p>

      {/* Skills / Tech Stack */}
      <motion.div
  className="grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
      >
        {["React","Java","AI-ML","Web-Dev", "Next.js", "Tailwind CSS", "Python", "Node.js", "MongoDB", "JavaScript", "HTML/CSS"].map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-4 text-center font-medium text-cyan-700 hover:scale-105 transition-transform cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Footer / Quote */}
      <motion.p
        className="mt-16 text-gray-600 italic text-center max-w-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
  &quot;Design is not just what it looks like, design is how it works.&quot; – Steve Jobs
      </motion.p>

    </div>
  );
}
