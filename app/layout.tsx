import "./globals.css"
import NavHeader from "./components/NavHeader"

export const metadata = {
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
      <body>
       <header style={{ 
  background: "black", 
  padding: "1rem", 
  position: "sticky", 
  top: 0, 
  zIndex: 50 
}}>
  <Nav />
</header>

        <main>{children}</main>
        <footer style={{ background: "black", color: "white", textAlign: "center", padding: "1rem", marginTop: "2rem" }}>
          © LuWorx. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
