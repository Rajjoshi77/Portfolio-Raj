"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    { title: "Software	Engineering	Job	Simulation", year: "2024", description: " Certificate	of	Completion By JPMorgan Chase & CO" },
    { title: "50 Days Leetcode Badge", year: "2025", description: "Streak of 50 Days Leetcode" },
    { title: "Certified Introduction to Natural Language Processing", year: "2025", description: "Completed official certification for Introduction to Natural Language Processing By IBM." },
    { title: "OpenAI Generative Pre-trained Transformer 3 (GPT-3) for developers", year: "2025", description: "certified OpenAI Generative Pre-trained Transformer 3 (GPT-3) for developers By IBM." },
  ];

  return (
  <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4 py-10">
      
      {/* Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-cyan-400 mb-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Achievements
      </motion.h1>

      {/* Achievement Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {achievements.map((achieve, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-xl rounded-xl p-6 border-l-4 border-cyan-500 hover:shadow-2xl transition-shadow cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-cyan-700 mb-2">{achieve.title}</h2>
            <p className="text-cyan-500 font-semibold mb-2">{achieve.year}</p>
            <p className="text-gray-700">{achieve.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Quote */}
      <motion.p
        className="mt-16 text-gray-600 italic text-center max-w-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
  &quot;Success is the sum of small efforts repeated day in and day out.&quot; – Robert Collier
      </motion.p>

    </div>
  );
}
