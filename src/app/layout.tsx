import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProfileModalRoute from "./ProfileModalRoute";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raj's Portfolio",
  description: "Created by Raj Joshi",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen`}
      >
  <NavBar />
        {children}
        <Footer />
        {/* Modal route renderer - overlays pages when active */}
        <ProfileModalRoute />
      </body>
    </html>
  );
}
