"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "MemoryVault",
      tech: "React, Node.js, MongoDB, Tailwind CSS",
      description: "A unique memory journaling platform with sentiment analysis and emotional tagging.",
      link: "#",
    },
    {
      title: "FinanceForesight",
      tech: "Streamlit, Python, Pandas",
      description: "A finance prediction and analytics tool to help users forecast expenses and income.",
      link: "#",
    },
    {
      title: "Cricket Team Management",
      tech: "React, Node.js, MySQL",
      description: "A web app to manage cricket teams, player stats, and match schedules.",
      link: "#",
    },
    {
      title: "Blockchain Demo",
      tech: "Python, Flask",
      description: "A blockchain-based demo project showcasing basic ledger and transaction simulation.",
      link: "#",
    },
  ];

  return (
  <div className="min-h-screen bg-slate-900 flex flex-col items-center px-4 py-10">
      
      {/* Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-cyan-400 mb-12 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow cursor-pointer border-l-4 border-cyan-500"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-cyan-700 mb-2">{project.title}</h2>
            <p className="text-cyan-500 font-medium mb-2">{project.tech}</p>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-cyan-400 font-semibold hover:underline"
              target="_blank"
            >
              View Project
            </a>
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
  &quot;Projects are the proof of your skills and creativity.&quot;
      </motion.p>

    </div>
  );
}
