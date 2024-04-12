'use client'
import { OrbitControls } from "@react-three/drei"
import { Background } from "./Background"
import { Airplane } from './Airplane'
import {Cloud} from './Cloud'

export const Experience = ()=>{
    return(
        <>
            <OrbitControls />
            <Background />
            <mesh>
                <boxGeometry/>
                <meshNormalMaterial/>
            </mesh>
        </>
    )
}