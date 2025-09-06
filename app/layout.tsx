import "./globals.css"
import type { Metadata } from "next"
import NavHeader from "./components/NavHeader"

export const metadata: Metadata = {
  title: "LuWorx",
  description: "Digital SaaS and marketing solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <NavHeader />
        {children}
      </body>
    </html>
  )
}
