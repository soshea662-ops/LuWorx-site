"use client"

import Nav from "../components/Nav"

export default function SaaSPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Nav />
      <div className="px-6 py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">LuWorx SaaS Solutions</h1>
        <p className="text-lg text-gray-600 mb-10">
          We build scalable SaaS products tailored to solve modern challenges. 
          Our flagship tools streamline workflows and protect communities.
        </p>
        <div className="space-y-6">
          <div className="border rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">PursuitPro (AEC Workspace)</h2>
            <p>
              Proposal automation software designed for civil engineering and AEC firms. 
              Save time, reduce workload, and win more RFPs.
            </p>
          </div>
          <div className="border rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">FraudShield</h2>
            <p>
              AI-powered scam protection service for seniors and families. 
              Stop scams before they reach vulnerable users.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

