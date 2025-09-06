import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'LuWorx',
  description: 'Digital SaaS and marketing solutions',
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
          <nav>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              gap: '20px',
              margin: 0,
              padding: 0,
            }}>
              <li><Link className="nav-link" href="/">Home</Link></li>
              <li><Link className="nav-link" href="/about">About</Link></li>
              <li><Link className="nav-link" href="/explore">Explore</Link></li>
              <li><Link className="nav-link" href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{ background: 'black', color: 'white', textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
          © LuWorx. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
