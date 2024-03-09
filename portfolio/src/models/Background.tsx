"use client";

import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import LightMode from "./LightMode";

export default function Background() {
  return (
    <Canvas camera={{ position: [0, -10, 10], fov: 75 }}>
      <LightMode />
    </Canvas>
  );
}
