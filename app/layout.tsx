import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

export default function RootLayout({ children }) {
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