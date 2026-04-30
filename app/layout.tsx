import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import FloatingContact from "@/components/FloatingContact";
import { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children } : { children: ReactNode }) {
  return (
    <html>
      <body>
        <TopBar />
        <Navbar />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}