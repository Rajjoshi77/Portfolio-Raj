"use client";

import { motion } from "framer-motion";
import React from "react";

type Project = {
  title: string;
  tech: string;
  description: string;
  link: string;
};

export default function ProjectCards({ projects }: { projects: Project[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow cursor-pointer border-l-4 border-cyan-500"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-bold text-cyan-700 mb-2">{project.title}</h2>
          <p className="text-cyan-500 font-medium mb-2">{project.tech}</p>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <a href={project.link} className="text-cyan-400 font-semibold hover:underline">
            View Project
          </a>
        </motion.div>
      ))}
    </div>
  );
}
