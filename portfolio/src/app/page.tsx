'use client'

import { Experience } from "@/components/Experience.jsx";
import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Canvas>
        <color attach= "background" args={["#ececec"]} />
        <ScrollControls pages={5} damping={0.3}>
        <Experience />
        </ScrollControls>
      </Canvas>
    </>
  )
}
