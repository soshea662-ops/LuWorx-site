"use client";

import { motion } from "framer-motion";

export default function LuWorxHomepage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Hero Section */}
      <section
        className="flex-1 flex flex-col items-center justify-center text-center px-6 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
       <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            LuWorx: Many Skills. One Vision.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Building digital solutions across SaaS, Marketing, and Media.
          </motion.p>
        </div>
      </section>

     
