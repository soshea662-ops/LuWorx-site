import * as React from "react"

export function CardTitle({ children, className }: { children: React.ReactNode, className?: string }) {
  return <h3 className={`text-xl font-semibold ${className || ""}`}>{children}</h3>
}


export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-2">{children}</div>
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold">{children}</h3>
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
