export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Explore LuWorx</h1>
        <p className="leading-relaxed text-gray-300 mb-6">
          At LuWorx, we thrive on innovation and creativity across all our divisions. 
          Explore our services and discover how we can help transform your business.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why Explore?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Cutting-Edge Tech:</strong> Stay ahead with AI, automation, and smart solutions.</li>
            <li><strong>Creative Impact:</strong> Design, branding, and media built to inspire and connect.</li>
            <li><strong>Modular Tools:</strong> Build exactly what you need with flexible, integrated features.</li>
            <li><strong>Always Optimized:</strong> LuWorx evolves with your workflow — always fast, always reliable.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
