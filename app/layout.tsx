import "./globals.css";
import NavHeader from "./components/NavHeader";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <NavHeader />
        {children}
      </body>
    </html>
  );
}
