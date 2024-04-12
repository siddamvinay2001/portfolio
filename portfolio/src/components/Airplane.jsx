'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Airplane(props) {
  const { nodes, materials } = useGLTF('./models/airplane/model.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.PUSHILIN_Plane_Circle000.geometry} material={materials.plane} />
      <mesh geometry={nodes.PUSHILIN_Plane_Helix.geometry} material={materials.plane} position={[1.09, 0.23, 0]} />
    </group>
  )
}

useGLTF.preload('./models/airplane/model.glb')
