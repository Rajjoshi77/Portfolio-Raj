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
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 flex flex-col items-center px-4 py-10">
      
      {/* Header with Gradient */}
      <motion.div
        className="text-center mb-16"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          My Projects
        </h1>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
      </motion.div>

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-7xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            className="group relative bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/[0.15] border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.split(", ").map((tech, techIdx) => (
                  <span 
                    key={techIdx}
                    className="px-2 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </motion.a>
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
            Projects are the living proof of your skills and creativity in action.
          </p>
          <div className="absolute -bottom-8 right-0 text-5xl text-cyan-500/20">&rdquo;</div>
        </div>
      </motion.div>

    </div>
  );
}
