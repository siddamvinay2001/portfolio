'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import React from "react";

export const Navbar = () => {
  const pathName = usePathname()
  //const [isActive, setIsActive] = React.useState(f)
  return (
    <header className="header  flex justify-between">
      <Link
        href="/"
        className="flex justify-center w-10 h-10 rounded-lg bg-white items-center font-bold shadow-md"
      >
        <p className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
          SV
        </p>
      </Link>
      <nav className="flex text-lg font-medium gap-7">
        <Link href="/AboutMe" className={ pathName == '/AboutMe' ? 'text-blue-500' : 'text-black'}>AboutMe</Link>
        <Link href="/Contact" className={ pathName == '/Contact' ? 'text-blue-500' : 'text-black'}>Contact</Link>
        <Link href="/Projects" className={ pathName == '/Projects' ? 'text-blue-500' : 'text-black'}>Projects</Link>
      </nav>
    </header>
  );
};
