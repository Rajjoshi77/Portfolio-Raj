"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const openModal = () => {
    const params = new URLSearchParams(Array.from(searchParams?.entries() || []));
    params.set("modal", "profile");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-8 py-4 backdrop-blur-md bg-white/10 sticky top-0 z-50 shadow-md"
    >
      <Link href="/" className="text-2xl font-bold tracking-wide text-cyan-400 hover:text-cyan-300 transition-all">
        Raj<span className="text-white">Portfolio</span>
      </Link>

      <nav className="hidden md:flex gap-8 items-center">
        <Link href="/" className="relative text-lg group">
          Dashboard
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
        {["profile", "achievement", "projects", "aboutMe", "contact"].map((page) => (
          <Link key={page} href={`/${page}`} className="relative text-lg group">
            {page.charAt(0).toUpperCase() + page.slice(1)}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          aria-label="Toggle menu"
          className="p-2 rounded-md text-cyan-400 hover:bg-white/5"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="hidden md:flex items-center gap-4 mr-4 text-lg">
          <a href="https://github.com/rajjoshi7" target="_blank" className="hover:text-cyan-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/raj-joshi-90a699311/" target="_blank" className="hover:text-cyan-300">
            <FaLinkedin />
          </a>
          <a href="mailto:rajj94380@gmail.com" className="hover:text-cyan-300">
            <FaEnvelope />
          </a>
        </div>

        <div
          className="w-12 h-12 rounded-full border-2 border-cyan-400 overflow-hidden shadow-lg cursor-pointer hover:shadow-cyan-500/50 transition-all"
          onClick={openModal}
          title="Open profile"
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={50}
            height={50}
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>
      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute top-16 left-4 right-4 bg-slate-900 rounded-lg p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-lg font-medium text-cyan-300" onClick={() => setMobileOpen(false)}>Dashboard</Link>
              {[
                { label: "achievement", href: "/achievement" },
                { label: "projects", href: "/projects" },
                { label: "aboutMe", href: "/aboutMe" },
                { label: "contact", href: "/contact" },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="text-gray-200" onClick={() => setMobileOpen(false)}>{item.label.charAt(0).toUpperCase() + item.label.slice(1)}</Link>
              ))}
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/rajjoshi7" target="_blank" className="hover:text-cyan-300"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/raj-joshi-90a699311/" target="_blank" className="hover:text-cyan-300"><FaLinkedin /></a>
                <a href="mailto:rajj94380@gmail.com" className="hover:text-cyan-300"><FaEnvelope /></a>
              </div>
            </nav>
          </div>
        </div>
      )}
      {/* Intercepting route will show modal via layout-mounted route renderer. */}
    </motion.header>
  );
}
