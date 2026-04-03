"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "AI-Based Smart Traffic Management System",
      tech: "Machine Learning, Python",
      description: "Developing an intelligent traffic prediction system using machine learning algorithms to analyze congestion patterns and optimize traffic flow in urban areas.",
      link: "https://smart-traffic-management-hazel.vercel.app/",
      image: "/traffic_IQ.png"
    },
    {
      title: "Voxa-AI Platform",
      tech: "Python, AI Models, Google Colab, Ngrok",
      description: "Built an AI-powered platform featuring user authentication and text-to-image generation capabilities using Python-based models.",
      link: "#",
    },
    {
      title: "MERN Stack Job Portal",
      tech: "MongoDB, Express.js, React.js, Node.js",
      description: "Created a full-stack job portal application enabling job listings, applications, and user management with RESTful API architecture.",
      link: "#",
    },
    {
      title: "Voice Calendar System",
      tech: "Python, Speech Synthesis",
      description: "Developed a Python-based smart calendar application that manages events through voice commands and text input, featuring speech synthesis for event summaries.",
      link: "#",
    },
    {
      title: "Speech Recognition System",
      tech: "Python, Speech-to-Text",
      description: "Implemented a speech-to-text conversion system in Python to enable hands-free interaction and voice-based command execution.",
      link: "#",
    },
    {
      title: "Cricket Team Management System",
      tech: "React, Node.js, MySQL",
      description: "Built a web-based management system for organizing player data, match preparation, team analytics, and performance tracking.",
      link: "#",
    },
    {
      title: "Chrome Extensions Development",
      tech: "JavaScript, HTML, CSS",
      description: "Designed and developed custom Google Chrome extensions to automate browser tasks and enhance user productivity.",
      link: "#",
    },
    {
      title: "MemoryVault",
      tech: "React, Node.js, MongoDB, Tailwind CSS",
      description: "A unique memory journaling platform with sentiment analysis and emotional tagging.",
      link: "#",
    },
    {
      title: "Serenity Grand Hotel",
      tech: "Next.js, React, Tailwind CSS",
      description: "A luxury hotel website featuring a modern design, room showcases, and a booking interface.",
      link: "https://hotel-website-five-lovat.vercel.app/",
      image: "/hotel-website.png"
    },
    {
      title: "RDFS Distributed File System",
      tech: "Distributed Systems, React, Node.js, Next.js",
      description: "A comprehensive distributed file system simulator featuring real-time metrics, cluster topology visualization, and storage management.",
      link: "https://rfs-two.vercel.app/",
      image: "/rdfs.png"
    },
  ];

  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center px-4 py-10">

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

            <div className="relative z-10 h-full flex flex-col">
              {project.image && (
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg border border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
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
              <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>
              <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors mt-auto">
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
