"use client";
import Image from "next/image";
import Background from "@/models/Background";
import { Switch } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <Background />
      <div className="absolute top-0 left-0 z-1">
        <Switch defaultSelected aria-label="Automatic updates" />
      </div>
    </div>
  );
}
