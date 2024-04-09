'use client'

import { Experience } from "@/components/Experience";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Canvas>
        <color attach= "background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  )
}
