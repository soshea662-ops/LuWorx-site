"use client"

import { Button } from "./components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"


function NavHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-green-900 text-white shadow-md">
      <Link href="/" className="text-xl font-bold">LuWorx</Link>
      <nav className="space-x-6 hidden md:flex">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/digital">Digital Marketing</Link>
        <Link href="/saas">SaaS</Link>
        <Link href="/media">Media</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default function LuWorxHomepage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <NavHeader />
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-green-900 to-green-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          LuWorx: Many Skills. One Vision.
        </motion.h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Building digital solutions across SaaS, Marketing, and Media.
        </p>
        <Button asChild size="lg" className="rounded-2xl bg-white text-green-800 font-semibold">
          <Link href="#divisions">Explore Our Divisions</Link>
        </Button>
      </section>
      {/* ... rest of homepage sections */}
    </div>
  )
}
