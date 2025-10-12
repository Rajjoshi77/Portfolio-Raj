"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mt-12 py-6 text-center bg-white/10 backdrop-blur-md shadow-inner"
    >
      <p className="text-sm text-gray-300">
        © {new Date().getFullYear()} Raj Joshi. All rights reserved.
      </p>
      <div className="flex justify-center mt-2 gap-4">
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://github.com/rajjoshi7"
          target="_blank"
          className="hover:text-cyan-400 transition-all"
        >
          GitHub
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.linkedin.com/in/raj-joshi-90a699311/"
          target="_blank"
          className="hover:text-cyan-400 transition-all"
        >
          LinkedIn
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="mailto:rajj94380@gmai.com"
          className="hover:text-cyan-400 transition-all"
        >
          Email
        </motion.a>
      </div>
    </motion.footer>
  );
}
