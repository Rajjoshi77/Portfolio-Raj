"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Syne, DM_Sans } from "next/font/google";
import { FiMail, FiMapPin, FiClock, FiGithub, FiLinkedin, FiTwitter, FiCheckCircle } from "react-icons/fi";
import { CgSpinner } from "react-icons/cg";

const syne = Syne({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

const topics = [
  "Web Development",
  "UI/UX Design",
  "Collaboration",
  "Freelance",
  "Job Opportunity",
  "Just Saying Hi!"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: ""
  });

  const [progress, setProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Calculate progress
  useEffect(() => {
    let fieldsFilled = 0;
    if (formData.firstName.trim()) fieldsFilled++;
    if (formData.lastName.trim()) fieldsFilled++;
    if (formData.email.trim() && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) fieldsFilled++;
    if (formData.topic) fieldsFilled++;
    if (formData.message.trim()) fieldsFilled++;

    setProgress((fieldsFilled / 5) * 100);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > 500) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTopicClick = (topic: string) => {
    setFormData(prev => ({ ...prev, topic: prev.topic === topic ? "" : topic }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (progress < 100) return; // Basic validation
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY",
          subject: `New Message from ${formData.firstName} - ${formData.topic}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          topic: "",
          message: ""
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Error submitting form", result);
        alert("Something went wrong! Please check your access key or try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen bg-transparent text-white flex justify-center items-center py-12 px-4 relative overflow-hidden ${dmSans.className}`}>

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">

        {/* Left Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <div className="mb-2">
            <h1 className={`${syne.className} text-4xl lg:text-5xl font-bold text-[#00d4ff] mb-3`}>
              Let&apos;s Connect
            </h1>
            <p className="text-gray-300 text-base">
              Have a project in mind or just want to chat? Feel free to reach out. I&apos;m always open to discussing new opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Cards */}
            <motion.div whileHover={{ y: -4, boxShadow: "0 8px 20px -8px rgba(0,212,255,0.3)" }} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm transition-all">
              <FiMail className="text-[#00d4ff] text-2xl mb-2" />
              <h3 className={`${syne.className} text-lg font-semibold mb-1`}>Email</h3>
              <p className="text-gray-400 text-xs">rajjoshi@example.com</p>
            </motion.div>

            <motion.div whileHover={{ y: -4, boxShadow: "0 8px 20px -8px rgba(0,212,255,0.3)" }} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm transition-all">
              <FiMapPin className="text-[#00d4ff] text-2xl mb-2" />
              <h3 className={`${syne.className} text-lg font-semibold mb-1`}>Location</h3>
              <p className="text-gray-400 text-xs">India • Open to Remote</p>
            </motion.div>

            <motion.div whileHover={{ y: -4, boxShadow: "0 8px 20px -8px rgba(0,212,255,0.3)" }} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm transition-all">
              <FiClock className="text-[#00d4ff] text-2xl mb-2" />
              <h3 className={`${syne.className} text-lg font-semibold mb-1`}>Response Time</h3>
              <p className="text-gray-400 text-xs">Within 24 hours</p>
            </motion.div>

            <motion.div whileHover={{ y: -4, boxShadow: "0 8px 20px -8px rgba(0,212,255,0.3)" }} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm transition-all relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="absolute top-4 right-4 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <h3 className={`${syne.className} text-lg font-semibold mb-1`}>Available</h3>
                <p className="text-gray-400" style={{ fontSize: "0.65rem", lineHeight: "1rem" }}>Open to collabs & freelance</p>
              </div>

              <div className="flex gap-3 mt-3">
                <a href="https://github.com/Rajjoshi77" className="p-1.5 bg-white/10 rounded-full hover:bg-[#00d4ff] hover:text-black transition-colors text-sm">
                  <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/raj-piyushkumar-joshi-90a699311/" className="p-1.5 bg-white/10 rounded-full hover:bg-[#00d4ff] hover:text-black transition-colors text-sm">
                  <FiLinkedin />
                </a>
                <a href="https://twitter.com/" className="p-1.5 bg-white/10 rounded-full hover:bg-[#00d4ff] hover:text-black transition-colors text-sm">
                  <FiTwitter />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Form Panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden shadow-2xl">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
              <motion.div
                className="h-full bg-[#00d4ff]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-300">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#00d4ff] transition-colors"
                    placeholder="Raj"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-300">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#00d4ff] transition-colors"
                    placeholder="Joshi"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-300">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#00d4ff] transition-colors"
                  placeholder="Rajj@example.com"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-300 mb-1">What are you interested in?</label>
                <div className="flex flex-wrap gap-2">
                  {topics.map(topic => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => handleTopicClick(topic)}
                      className={`px-3 py-1.5 rounded-full text-xs transition-all border tracking-wide ${formData.topic === topic
                        ? "bg-[#00d4ff] text-black border-[#00d4ff] font-semibold"
                        : "bg-white/5 text-gray-300 border-white/10 hover:border-[#00d4ff]/50 hover:bg-white/10"
                        }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-medium text-gray-300">Your Message</label>
                  <span className={`text-[10px] ${formData.message.length >= 500 ? 'text-red-400' : 'text-gray-500'}`}>
                    {formData.message.length}/500
                  </span>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#00d4ff] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg p-3 flex items-center justify-center gap-2 text-sm"
                  >
                    <FiCheckCircle className="text-lg" />
                    <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                  </motion.div>
                ) : (
                  <motion.button
                    key="submit"
                    type="submit"
                    disabled={isSubmitting || progress < 100}
                    className={`w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all mt-2 ${progress < 100
                      ? "bg-white/10 text-gray-400 cursor-not-allowed"
                      : "bg-[#00d4ff] text-black hover:bg-[#00b5dd] shadow-[0_0_15px_rgba(0,212,255,0.3)]"
                      }`}
                    whileHover={progress === 100 ? { scale: 1.02 } : {}}
                    whileTap={progress === 100 ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <CgSpinner className="animate-spin text-xl" />
                    ) : (
                      <>Send Message</>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
