"use client"

import Nav from "../components/NavHeader"

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
 
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
  )
}

