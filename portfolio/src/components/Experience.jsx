"use client";
import { Float, Line, OrbitControls } from "@react-three/drei";
import { Background } from "./Background";
import { Airplane } from "./Airplane";
import { Cloud } from "./Cloud";
import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const LINE_NB_POINTS = 1000;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02;
const AIRPLANE_MAX_ANGLE = 35;
const FRICTION_DISTANCE = 42;

function renderClouds() {
  return (
    <>
      <Cloud opacity={0.5} scale={[0.3, 0.3, 0.3]} position={[-2, 1, -3]} />
      <Cloud opacity={0.5} scale={[0.2, 0.3, 0.4]} position={[1.5, -0.5, -2]} />
      <Cloud
        opacity={0.7}
        scale={[0.3, 0.3, 0.4]}
        position={[2, -0.2, -2]}
        rotation-y={Math.PI / 2}
      />
      <Cloud
        opacity={0.7}
        scale={[0.4, 0.4, 0.4]}
        position={[1, -0.2, -12]}
        rotation-y={Math.PI / 9}
      />
      <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[-1, 1, -53]} />
      <Cloud opacity={0.3} scale={[0.8, 0.8, 0.8]} position={[0, 1, -100]} />
    </>
  );
}

function CurveParams() {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -10),
        new THREE.Vector3(-2, 0, -20),
        new THREE.Vector3(-3, 0, -30),
        new THREE.Vector3(0, 0, -40),
        new THREE.Vector3(5, 0, -50),
        new THREE.Vector3(7, 0, -60),
        new THREE.Vector3(5, 0, -70),
        new THREE.Vector3(0, 0, -80),
        new THREE.Vector3(0, 0, -90),
        new THREE.Vector3(0, 0, -100),
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);


  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  const shape = useMemo(()=>{
    const shape = new THREE.Shape();
    shape.moveTo(0,-0.5);
    shape.lineTo(0,0.2);
    return shape;
  },[curve]);

  return [curve,shape];
}


export const Experience = () => {
    const [curve,shape] = CurveParams();
    const [airplanePosition, setAirplanePosition] = useState(0);
    const airplane = useRef();
    const cameraGroup = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          // Move airplane forward along the curve
          setAirplanePosition((prevPos) =>
            Math.min(prevPos + CURVE_AHEAD_AIRPLANE, 1)
          );
          break;
        case "ArrowDown":
          // Move airplane backward along the curve
          setAirplanePosition((prevPos) =>
            Math.max(prevPos - CURVE_AHEAD_AIRPLANE, 0)
          );
          break;
        default:
          break;
      }
    };

    // Add event listener for keydown
    document.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  // Update airplane position based on airplanePosition state
  useFrame((_state, delta) => {
    // Other animation code...

    const curPoint = curve.getPoint(airplanePosition);
    airplane.current.position.lerp(curPoint, delta * 24);

    // Other animation code...
  });
       

  return (
    <>
      <group ref={cameraGroup}>
      {/* <OrbitControls enableZoom={false}/> */}
      <Background />
      <group ref={airplane}>
      <Float floatIntensity={2} speed={2}>
        <Airplane rotation-y={Math.PI / 2} scale={[0.2, 0.2, 0.2]} />
      </Float>
      </group>
      <group position-y={-2}>
        <mesh>
            <extrudeGeometry 
                args={[shape,{
                    steps: LINE_NB_POINTS,
                    bevelEnabled: false,
                    extrudePath: curve,
                }]}
            />
            <meshStandardMaterial color={"white"} opacity={0.7} transparent />
        </mesh>
      </group>
      {renderClouds()}
      </group>
    </>
  );
};
