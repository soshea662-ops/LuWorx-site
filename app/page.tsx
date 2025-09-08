"use client";

export default function LuWorxHomepage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          LuWorx: Many Skills. One Vision.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Building digital solutions across SaaS, Marketing, and Media.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} LuWorx LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
