"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";

import Link from "next/link";
import { motion } from "framer-motion";

// --- Shared Navigation Header ---
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
  );
}

// --- Homepage ---
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

      {/* Who We Are */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-lg text-gray-600">
          LuWorx LLC is a versatile digital innovation company rooted in creativity, 
          technology, and a Celtic-inspired spirit of mastery. We deliver solutions 
          in SaaS, digital marketing, and publishing that empower businesses and individuals.
        </p>
      </section>

      {/* Divisions Grid */}
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

          {/* SaaS */}
          <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
            <CardHeader>
              <CardTitle>SaaS Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">
                Innovative tools like PursuitPro for AEC proposals and FraudShield for 
                fraud prevention — scalable SaaS for modern needs.
              </p>
              <Button asChild className="w-full bg-green-800 text-white rounded-2xl">
                <Link href="/saas">Discover SaaS</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Media */}
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

      {/* Why LuWorx */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Why LuWorx?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We combine creativity, technology, and a passion for innovation. From SaaS 
          automation to digital storytelling, we are dedicated to helping you succeed 
          across every digital frontier.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-green-900 text-white text-center">
        <p>&copy; {new Date().getFullYear()} LuWorx LLC. All rights reserved.</p>
        <div className="mt-4 space-x-6">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}

// --- Digital Marketing Landing Page ---
export function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <NavHeader />
      <div className="px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">LuWorx Digital Marketing</h1>
        <p className="text-lg text-gray-600 mb-10">
          We provide SEO, SEM, branding, and digital campaigns that help businesses stand out 
          and connect with their audience. Our strategies are designed for measurable results.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Search Engine Optimization (SEO)</li>
          <li>Pay-Per-Click (PPC) Campaigns</li>
          <li>Web Design & Brand Identity</li>
          <li>Social Media Management</li>
        </ul>
      </div>
    </div>
  );
}

// --- SaaS Landing Page ---
export function SaaSPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <NavHeader />
      <div className="px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">LuWorx SaaS Solutions</h1>
        <p className="text-lg text-gray-600 mb-10">
          We build scalable SaaS products tailored to solve modern challenges. Our flagship 
          tools streamline workflows and protect communities.
        </p>
        <div className="space-y-6">
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle>PursuitPro (AEC Workspace)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Proposal automation software designed for civil engineering and AEC firms. 
                Save time, reduce workload, and win more RFPs.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle>FraudShield</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                AI-powered scam protection service for seniors and families. Stop scams 
                before they reach vulnerable users.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// --- Media & Publishing Landing Page ---
export function MediaPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <NavHeader />
      <div className="px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">LuWorx Media & Publishing</h1>
        <p className="text-lg text-gray-600 mb-10">
          We create knowledge-driven products that inspire, educate, and entertain. From 
          publishing to e-learning, our media division builds content that lasts.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>KDP Puzzle & Activity Books</li>
          <li>Educational eBooks & Guides</li>
          <li>Digital Microlearning Courses</li>
          <li>Content Marketing Assets</li>
        </ul>
      </div>
    </div>
  );
}
