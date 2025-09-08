"use client"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8">About LuWorx</h1>

        {/* Story Section */}
        <h2 className="text-2xl font-semibold mb-4">The Story of LuWorx</h2>
        <p className="leading-relaxed text-gray-300 mb-6">
          LuWorx was born from the idea that creativity and innovation thrive at the crossroads of many skills. 
          The name traces its roots to Lugh, the Celtic god of light, craft, and countless talents. In Irish mythology, 
          Lugh was celebrated as a master of many disciplines—a warrior, artist, craftsman, and strategist. He embodied 
          adaptability and brilliance, showing that true strength comes from versatility. LuWorx carries that same spirit 
          into the modern world.
        </p>
        <p className="leading-relaxed text-gray-300 mb-6">
          We are a digital-first creative company, built on the belief that businesses deserve solutions as dynamic and 
          multifaceted as the challenges they face. Like Lugh, we don’t confine ourselves to a single discipline. Instead, 
          LuWorx thrives at the intersection of digital marketing, design, AI innovation, web development, and creative 
          strategy—delivering powerful results that help small businesses grow, adapt, and succeed.
        </p>
        <p className="leading-relaxed text-gray-300">
          Our name, shortened from “LughWorx” to LuWorx, reflects our modern, streamlined approach while keeping the 
          mythic inspiration intact. The “Worx” signifies not only the tangible work we deliver, but also the engine 
          of ideas, technology, and creativity that powers everything we do.
        </p>
      </div>
    </div>
  )
}
