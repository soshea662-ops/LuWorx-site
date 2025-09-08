import "./globals.css";
import NavHeader from "./components/NavHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <NavHeader />   {/* ✅ Global nav here */}
        {children}
        <footer className="py-8 bg-black text-center border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} LuWorx LLC. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
