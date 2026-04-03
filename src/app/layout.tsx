import React, { Suspense } from "react";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white min-h-screen relative`}
      >
        {/* Global Background Video */}
        <div className="fixed inset-0 -z-50 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay to make text readable */}
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>

        <Suspense fallback={<div />}> 
          <NavBar />
        </Suspense>
        {children}
        <Footer />
        {/* Modal route renderer - overlays pages when active */}
        <Suspense fallback={<div />}>
          <ProfileModalRoute />
        </Suspense>
      </body>
    </html>
  );
}
