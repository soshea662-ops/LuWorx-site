"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function NavHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black text-white shadow-md">
      {/* Logo + Brand */}
      <div className="flex items-center space-x-3">
        <Link href="/">
          <Image
            src="/logo.png"
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

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-green-500">Home</Link>
        <Link href="/about" className="hover:text-green-500">Our Story</Link>
        <Link href="/explore" className="hover:text-green-500">Explore</Link>
        <Link href="/contact" className="hover:text-green-500">Contact</Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 focus:outline-none"
      >
        {/* Hamburger icon */}
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-black text-center md:hidden py-6 space-y-4">
          <Link href="/" className="block hover:text-green-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:text-green-500" onClick={() => setIsOpen(false)}>Our Story</Link>
          <Link href="/explore" className="block hover:text-green-500" onClick={() => setIsOpen(false)}>Explore</Link>
          <Link href="/contact" className="block hover:text-green-500" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  )
}
