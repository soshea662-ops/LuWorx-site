"use client";
import Image from "next/image";

export default function LuWorxHomepage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Hero Section */}
      <section
        className="flex-1 flex flex-col items-center justify-center text-center px-6 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }} // <-- Your image here
      >
        {/* Optional overlay for dark effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            LuWorx: Many Skills. One Vision.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Building digital solutions across SaaS, Marketing, and Media.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} LuWorx LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
