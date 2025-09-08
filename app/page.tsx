"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function LuWorxHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* ✅ Keep this navbar only */}
      <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800 relative">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="LuWorx Logo" width={40} height={40} />
          <span className="text-2xl font-bold">LuWorx</span>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-green-500">Home</Link>
          <Link href="/about" className="hover:text-green-500">Our Story</Link>
          <Link href="/explore" className="hover:text-green-500">Explore</Link>
          <Link href="/contact" className="hover:text-green-500">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {menuOpen && (
          <div className="absolute top-16 right-0 w-48 bg-black border border-gray-700 rounded-lg shadow-lg md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>Our Story</Link>
              <Link href="/explore" onClick={() => setMenuOpen(false)}>Explore</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero + Footer remain the same */}

    
