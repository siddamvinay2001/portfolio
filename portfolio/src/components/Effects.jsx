import { Instance, Instances, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { AdditiveBlending, DoubleSide, MathUtils } from "three";

const INSTANCES = 240;
const MAX_OPACITY = 0.1;

const CustomParticles = () => {
  const ref = useRef();
  let particlePostion = {
    x: 0,
    y: 0,
    z: 0,
  };

  let randomSpeed = 0;

  const resetRandomPosition = () => {
    particlePostion = {
      x: MathUtils.randFloatSpread(8),
      y: MathUtils.randFloatSpread(5),
      z: MathUtils.randFloatSpread(8),
    };
    randomSpeed = MathUtils.randFloat(16, 20);
  };
  resetRandomPosition();

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.position.z += randomSpeed * delta;
      if (ref.current.position.z > 5) {
        resetRandomPosition();
        ref.current.position.z = particlePostion.z;
      }
    }
  });

  return (
    <Instance
      ref={ref}
      color={"white"}
      position={[particlePostion.x, particlePostion.y, particlePostion.z]}
      rotation-y={Math.PI / 2}
    />
  );
};

export const CustomEffect = () => {
  const speedMaterial = useRef();
  const scroll = useScroll();
  const lastScroll = useRef(0);

  useFrame((_state, delta)=>{
    if(scroll.offset - lastScroll.current > 0.0005){
        speedMaterial.current.opacity = MAX_OPACITY
    }
    lastScroll.current = scroll.offset;
    if(speedMaterial.current.opacity > 0){
        speedMaterial.current.opacity -= delta * 0.2;
    }
  })

  return (
    <group>
      <Instances>
        <planeGeometry args={[1, 0.004]} />
        <meshBasicMaterial
          ref={speedMaterial}
          side={DoubleSide}
          blending={AdditiveBlending}
          opacity={0.1}
          transparent
        />
        {Array(INSTANCES)
          .fill()
          .map((_, key) => (
            <CustomParticles key={key} />
          ))}
      </Instances>
    </group>
  );
};
