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
        <motion.h1 ...>LuWorx: Many Skills. One Vision.</motion.h1>
        <p>Building digital solutions across SaaS, Marketing, and Media.</p>
        <Button asChild ...><Link href="#divisions">Explore Our Divisions</Link></Button>
      </section>

      {/* Our Divisions */}
<section id="divisions" className="py-20 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-12">Our Divisions</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
    
    {/* Digital Marketing */}
    <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
      <CardHeader>
        <CardTitle>Digital Marketing</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-600">
          SEO, SEM, web design, and social media campaigns to help small 
          businesses grow their presence.
        </p>
        <Button asChild className="w-full bg-green-800 text-white rounded-2xl">
          <Link href="/digital">Learn More</Link>
        </Button>
      </CardContent>
    </Card>

    {/* SaaS Solutions */}
    <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
      <CardHeader>
        <CardTitle>SaaS Solutions</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-600">
          Innovative tools like PursuitPro for AEC proposals and FraudShield 
          for fraud prevention — scalable SaaS for modern needs.
        </p>
        <Button asChild className="w-full bg-green-800 text-white rounded-2xl">
          <Link href="/saas">Discover SaaS</Link>
        </Button>
      </CardContent>
    </Card>

    {/* Media & Publishing */}
    <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
      <CardHeader>
        <CardTitle>Media & Publishing</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-600">
          From KDP puzzle books to digital courses and content, we create 
          knowledge-driven products.
        </p>
        <Button asChild className="w-full bg-green-800 text-white rounded-2xl">
          <Link href="/media">Explore Media</Link>
        </Button>
      </CardContent>
    </Card>

  </div>
</section>


      {/* Footer */}
      <footer className="py-8 bg-green-900 text-white text-center">
        <p>© {new Date().getFullYear()} LuWorx LLC. All rights reserved.</p>
      </footer>
    </div>
  )
}
