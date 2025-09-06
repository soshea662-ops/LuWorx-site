"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/explore", label: "Explore" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav>
      <ul style={{
        listStyle: "none",
        display: "flex",
        gap: "20px",
        margin: 0,
        padding: 0,
      }}>
        {links.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

