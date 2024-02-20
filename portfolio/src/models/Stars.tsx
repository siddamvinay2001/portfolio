'use client'
import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Trail, OrbitControls, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function ShootingStar() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 2
    ref.current.position.set(Math.sin(t) * 4, Math.atan(t) * Math.cos(t / 2) * 2, Math.cos(t) * 4)
  })
  return (
    // <div className='float-right'>
    <Trail width={5} length={8} color={new THREE.Color(2, 1, 10)} attenuation={(t) => t * t}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.25]} />
        <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
      </mesh>
    </Trail>
    // </div>
  )
}

export default function StarsCanvas() {
  return (
    <div className='h-screen w-screen fixed top-0 left-0 z-[-1]'>
    <Canvas camera={{ position: [0, 0, 15] }}>
      <color attach="background" args={['black']} />
      <ambientLight intensity={1} />
      <ShootingStar className='float-right'/>
      <Stars saturation={false} count={400} speed={0.5} />
      <OrbitControls />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} />
      </EffectComposer>
    </Canvas>
    </div>
  )
}
