"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
  <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4 py-10">

      {/* Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-cyan-400 mb-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h1>

      {/* Contact Form */}
      <motion.form
        className="bg-white text-black shadow-2xl rounded-2xl p-10 w-full max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none shadow-sm"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none shadow-sm"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none shadow-sm"
            ></textarea>
        </div>

        <motion.button
          type="submit"
          className="w-full bg-cyan-600 text-white font-semibold py-3 rounded-xl hover:bg-cyan-700 transition-all shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Footer Quote */}
      <motion.p
        className="mt-16 text-gray-600 italic text-center max-w-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
  &quot;Communication is the bridge between confusion and clarity.&quot;
      </motion.p>
    </div>
  );
}
