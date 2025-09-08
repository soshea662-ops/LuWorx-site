"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black text-white border-b border-gray-700">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image src="/logo.png" alt="LuWorx Logo" width={40} height={40} />
        <span className="font-bold text-lg">LuWorx</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-green-500">Home</Link>
        <Link href="/about" className="hover:text-green-500">Our Story</Link>
        <Link href="/explore" className="hover:text-green-500">Explore</Link>
        <Link href="/contact" className="hover:text-green-500">Contact</Link>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-black border border-gray-700 rounded-lg shadow-lg p-4 flex flex-col space-y-4 md:hidden">
          <Link href="/" className="hover:text-green-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-green-500" onClick={() => setIsOpen(false)}>Our Story</Link>
          <Link href="/explore" className="hover:text-green-500" onClick={() => setIsOpen(false)}>Explore</Link>
          <Link href="/contact" className="hover:text-green-500" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
