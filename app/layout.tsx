import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const metadata = {
  title: 'LuWorx',
  description: 'Digital SaaS and marketing solutions',
}

function Nav() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/explore', label: 'Explore' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
      }}>
        {links.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: 'black', padding: '1rem' }}>
          <Nav />
        </header>
        <main>{children}</main>
        <footer style={{ background: 'black', color: 'white', textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
          © LuWorx. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
