"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function LuWorxHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800 relative">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="LuWorx Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-2xl font-bold">LuWorx</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-green-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-500">
            Our Story
          </Link>
          <Link href="/explore" className="hover:text-green-500">
            Explore
          </Link>
          <Link href="/contact" className="hover:text-green-500">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-0 w-48 bg-black border border-gray-700 rounded-lg shadow-lg md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <Link href="/" className="hover:text-green-500" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="hover:text-green-500" onClick={() => setMenuOpen(false)}>
                Our Story
              </Link>
              <Link href="/explore" className="hover:text-green-500" onClick={() => setMenuOpen(false)}>
                Explore
              </Link>
              <Link href="/contact" className="hover:text-green-500" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="flex-1 flex flex-col items-center justify-center text-center px-6 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Motion Content */}
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            LuWorx: Many Skills. One Vision.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Building digital solutions across SaaS, Marketing, and Media.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} LuWorx LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
