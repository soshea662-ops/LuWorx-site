"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black text-white border-b border-gray-700">
      {/* Logo + Brand */}
      <div className="flex items-center space-x-3">
        <Link href="/">
          <Image
            src="/logo.png" // <-- your logo in /public/logo.png
            alt="LuWorx Logo"
            width={40}
            height={40}
            className="rounded"
          />
        </Link>
        <Link href="/" className="text-2xl font-bold hover:text-green-500">
          LuWorx
        </Link>
      </div>

      {/* Desktop Links */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-green-500">Home</Link>
        <Link href="/about" className="hover:text-green-500">Our Story</Link>
        <Link href="/explore" className="hover:text-green-500">Explore</Link>
        <Link href="/contact" className="hover:text-green-500">Contact</Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center px-3 py-2 border border-gray-400 rounded text-gray-200 hover:text-white hover:border-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="fill-current h-4 w-4"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-700 md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" className="hover:text-green-500" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="hover:text-green-500" onClick={() => setIsOpen(false)}>Our Story</Link>
            <Link href="/explore" className="hover:text-green-500" onClick={() => setIsOpen(false)}>Explore</Link>
            <Link href="/contact" className="hover:text-green-500" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
