import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "@/components/ui/sonner";

const Chinese = localFont({
  src: "./fonts/go3v2.ttf",
  variable: "--font-chinese",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Food Fusion",
  description: "Authentic Chinese Restaraunt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased ${Chinese.variable} font-chinese`}>
        <CartProvider>
          <Nav />
          {children}
        </CartProvider>
        <Toaster/>
        <Footer />
      </body>
    </html>
  );
}
