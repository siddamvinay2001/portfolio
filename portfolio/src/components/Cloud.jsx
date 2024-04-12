'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cloud(props) {
  const { nodes, materials } = useGLTF('./models/cloud/model.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mball001.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('./models/cloud/model.gltf')
