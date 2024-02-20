import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import StarsCanvas from '../models/Stars';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinay's Portfolio",
  description: "Software developer resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-200">
      <body className={inter.className}>
      <Navbar></Navbar>
        <StarsCanvas></StarsCanvas>
        {children}
        </body>
    </html>
  );
}
