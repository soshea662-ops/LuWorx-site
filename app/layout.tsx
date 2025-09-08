export const metadata = {
  title: "LuWorx",
  description: "Many Skills. One Vision.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <NavHeader />   {/* ✅ Navbar here, shows on every page */}
        {children}
      </body>
    </html>
  )
}
