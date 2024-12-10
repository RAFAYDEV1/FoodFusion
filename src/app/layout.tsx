import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

const Chinese = localFont({
  src: "./fonts/go3v2.ttf",
  variable : "--font-chinese",
  weight: "100 900"
})

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
      <body
        className={`antialiased ${Chinese.variable} font-chinese`}
      >
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
