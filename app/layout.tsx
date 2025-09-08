import "./globals.css";
import NavHeader from "./components/NavHeader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <NavHeader />
        {children}
      </body>
    </html>
  );
}
