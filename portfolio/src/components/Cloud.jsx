'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cloud({opacity, ...props}) {
  const { nodes, materials } = useGLTF('./models/cloud/model.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mball001.geometry}>
        <meshStandardMaterial {...materials['lamert2SG.0.01']} transparent opacity={opacity}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/cloud/model.gltf')
