'use client'
import { Float, OrbitControls } from "@react-three/drei"
import { Background } from "./Background"
import { Airplane } from './Airplane'
import {Cloud} from './Cloud'

export const Experience = ()=>{
    return(
        <>
            <OrbitControls />
            <Background />
            <Float floatIntensity={2} speed={2}>
                <Airplane rotation-y = {Math.PI/2} scale = {[0.6,0.6,0.6]}/>
            </Float>
        </>
    )
}