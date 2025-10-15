"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    { title: "Software	Engineering	Job	Simulation", year: "2024", description: " Certificate	of	Completion By JPMorgan Chase & CO" },
    { title: "100 Days LeetCode Badge", year: "2025", description: "Completed the 100-Day LeetCode Daily Challenge, demonstrating consistent problem-solving skills and algorithmic thinking" },
    { title: "Certified Introduction to Natural Language Processing", year: "2025", description: "Completed official certification for Introduction to Natural Language Processing By IBM." },
    { title: "OpenAI Generative Pre-trained Transformer 3 (GPT-3) for developers", year: "2025", description: "certified OpenAI Generative Pre-trained Transformer 3 (GPT-3) for developers By IBM." },
  ];

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 flex flex-col items-center justify-center px-4 py-10">
      
      {/* Header with Gradient */}
      <motion.div
        className="text-center mb-16"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          My Achievements
        </h1>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
      </motion.div>

      {/* Achievement Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-7xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {achievements.map((achieve, idx) => (
          <motion.div
            key={idx}
            className="group relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-3 relative z-10">{achieve.title}</h2>
            <p className="text-cyan-300 font-semibold mb-3 relative z-10">{achieve.year}</p>
            <p className="text-gray-300 relative z-10 leading-relaxed">{achieve.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Quote */}
      <motion.div
        className="mt-16 text-center max-w-2xl mx-auto px-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="relative">
          <div className="absolute -top-4 left-0 text-5xl text-cyan-500/20">&ldquo;</div>
          <p className="text-gray-300 italic text-lg leading-relaxed">
            Success is the sum of small efforts repeated day in and day out.
          </p>
          <p className="text-cyan-400 mt-2 font-medium">– Robert Collier</p>
          <div className="absolute -bottom-8 right-0 text-5xl text-cyan-500/20">&rdquo;</div>
        </div>
      </motion.div>

    </div>
  );
}
