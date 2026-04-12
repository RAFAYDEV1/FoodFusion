import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "@/components/ui/sonner";
import { AnimatedBackground } from "./components/background";

const Chinese = localFont({
  src: "./fonts/go3v2.ttf",
  variable: "--font-chinese",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fusion Feast",
  description: "Authentic Chinese Restaraunt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={`antialiased ${Chinese.variable} font-chinese bg-transparent text-white min-h-screen flex flex-col`} suppressHydrationWarning>
        <AnimatedBackground />
        <CartProvider>
          <Nav />
          <main className="flex-1">
            {children}
          </main>
        </CartProvider>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
