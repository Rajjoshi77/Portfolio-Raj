import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import ProjectCards from "./components/ProjectCards";
import { motion } from "framer-motion";

export default function Home() {
  return (
  <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
        {/* Left Text Section */}
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-cyan-400">Raj Joshi</span>
          </h1>
          <p className="text-gray-300 text-lg">
            I’m a passionate full-stack developer focused on building modern web
            apps with clean design, smooth UX, and AI-powered functionality.
          </p>
          <div className="flex gap-4">
            <a
              href="./projects"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              View Projects
            </a>
            <a
              href="./contact"
              className="border border-cyan-500 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Contact Me
            </a>
          </div>
          <div className="flex gap-5 pt-4 text-2xl">
            <a href="https://github.com/Rajjoshi77" target="_blank" className="hover:text-cyan-400">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-cyan-400">
              <FaLinkedin />
            </a>
            <a href="mailto:raj@example.com" className="hover:text-cyan-400">
              <FaEnvelope />
            </a>
            <a href="https://twitter.com/" target="_blank" className="hover:text-cyan-400">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="mt-10 md:mt-0">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={300}
              height={300}
              className="rounded-full border-4 border-cyan-500 shadow-lg hover:scale-105 transition"
            />
        </div>
      </section>
    </main>
  );
}
