"use client";

import { Experience } from "@/components/Experience.jsx";
import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { TextSection } from "../components/TextSection";
import { WelcomePage } from "../components/WelcomePage";

export default function Home() {
  const [currentState, setCurrentState] = useState(0);
  const [onPlay, setOnPlay] = useState(false);
  return (
    <>
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={50} damping={1}>
          <Experience
            curretState={currentState}
            setCurrentState={setCurrentState}
          />
        </ScrollControls>
      </Canvas>
      {onPlay && (
        <TextSection
          currentState={currentState}
          setCurrentState={setCurrentState}
        />
      )}
      {!onPlay && <WelcomePage onPlay={onPlay} setOnPlay={setOnPlay} />}
    </>
  );
}
