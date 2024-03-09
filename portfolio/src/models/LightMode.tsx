import { Clouds, Cloud, Sky } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function LightMode() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    groupRef.current.position.x = Math.sin(t * 0.05) * 10;
  });

  // Getting cloud coordinates
  const getCloudPositions = (numberOfClouds) => {
    const cloudPositions = [];
    const radius = 15;
    const angleIncrement = (Math.PI * 2) / numberOfClouds;

    // Start angle to ensure clouds are spread across all quadrants
    const startAngle = -Math.PI / 4;

    for (let i = 0; i < numberOfClouds; i++) {
      // Calculate angle for current cloud
      const angle = startAngle + i * angleIncrement;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = Math.random() * 20 - 10;
      cloudPositions.push({ x, y, z });
    }
    return cloudPositions;
  };

  // Get cloud positions
  const cloudPositions = getCloudPositions(100); // Number of clouds

  return (
    <>
      <ambientLight intensity={Math.PI / 1.5} />
      <spotLight
        position={[-20, 0, 10]}
        color="red"
        angle={0.15}
        decay={0}
        penumbra={-1}
        intensity={30}
      />
      <spotLight
        position={[20, -10, 10]}
        color="red"
        angle={0.2}
        decay={0}
        penumbra={-1}
        intensity={20}
      />
      <Sky />
      <group ref={groupRef}>
        <Clouds material={THREE.MeshLambertMaterial}>
          {cloudPositions.map(({ x, y, z }, index) => {
            return (
              <Cloud key={index} position={[x, y, z]} speed={0} opacity={0.5} />
            );
          })}
        </Clouds>
      </group>
    </>
  );
}
