"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Button } from "./components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function LuWorxHomepage() {
  return (
    <div className="min-h-screen bg-black text-white">
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
        <Button asChild size="lg" className="rounded-2xl bg-green-600 text-white font-semibold">
          <Link href="#divisions">Explore Our Divisions</Link>
        </Button>
      </section>

      {/* Our Divisions */}
      <section id="divisions" className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Divisions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {/* Example cards here... */}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} LuWorx LLC. All rights reserved.</p>
      </footer>
    </div>
  )
}
