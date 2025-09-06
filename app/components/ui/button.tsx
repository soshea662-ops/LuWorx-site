import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  className?: string
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export function Button({ asChild, className = "", size = "md", children, ...props }: ButtonProps) {
  const sizeClasses =
    size === "sm"
      ? "px-3 py-1 text-sm"
      : size === "lg"
      ? "px-6 py-3 text-lg"
      : "px-4 py-2 text-base"

  const styles = `inline-block rounded-md font-medium transition ${sizeClasses} ${className}`

  if (asChild) {
    return <span className={styles}>{children}</span>
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  )
}
