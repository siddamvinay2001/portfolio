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
  console.log("Home page onPlay state: ", onPlay);
  return (
    <>
    {onPlay && 
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={5} damping={0.3}>
          <Experience />
        </ScrollControls>
      </Canvas>
    }
    {onPlay && <TextSection />}

    {!onPlay &&  <WelcomePage onPlay = {onPlay} setOnPlay = {setOnPlay} />}
    </>
  );
}

