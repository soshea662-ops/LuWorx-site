"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Button } from "./components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function LuWorxHomepage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="text-center py-20 bg-black text-white">
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
        

      {/* Footer */}
            <footer className="py-8 bg-black text-center border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} LuWorx LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
