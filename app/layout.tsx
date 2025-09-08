import "./globals.css";
import NavHeader from "./components/NavHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <NavHeader />   {/* ✅ Navbar here, applies to all pages */}
        {children}
      </body>
    </html>
  );
}

