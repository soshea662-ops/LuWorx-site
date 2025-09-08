export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="leading-relaxed text-gray-300 mb-6">
          We’d love to hear from you! Reach out anytime:
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@luworx.com" className="text-green-500 hover:underline">
            info@luworx.com
          </a>
        </p>
      </div>
    </div>
  );
}
