'use client'

import { Experience } from "@/components/Experience.jsx";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Canvas camera={{
        position: [0,0,5],
        fov: 30
      }}>
        <color attach= "background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  )
}
