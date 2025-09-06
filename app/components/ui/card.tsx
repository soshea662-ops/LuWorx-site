import * as React from "react"

export function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`border border-gray-700 bg-black rounded-lg p-4 ${className || ""}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`mb-2 ${className || ""}`}>{children}</div>
}

export function CardTitle({ children, className }: { children: React.ReactNode, className?: string }) {
  return <h3 className={`text-xl font-semibold ${className || ""}`}>{children}</h3>
}

export function CardContent({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={className || ""}>{children}</div>
}
