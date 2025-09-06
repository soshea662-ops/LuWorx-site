"use client"

import Image from "next/image"
import Link from "next/link"

export default function NavHeader() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-black text-white shadow-md">
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

      {/* Navigation Links */}
      <nav className="space-x-8 hidden md:flex">
        <Link href="/" className="hover:text-green-500">Home</Link>
        <Link href="/about" className="hover:text-green-500">Our Story</Link>
        <Link href="/explore" className="hover:text-green-500">Explore</Link>
        <Link href="/contact" className="hover:text-green-500">Contact</Link>
      </nav>
    </header>
  )
}
