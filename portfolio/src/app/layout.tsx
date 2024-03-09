import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/models/Background";

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
    <html lang="en" className="">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
