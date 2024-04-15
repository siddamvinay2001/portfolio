"use client";
import {
  Float,
  OrbitControls,
  PerspectiveCamera,
  useScroll,
} from "@react-three/drei";
import { Euler, Group, Vector3 } from "three";
import { Background } from "./Background";
import { Airplane } from "./Airplane";
import { Text } from "troika-three-text";
import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { CurveUtils } from "../utils/utils";
import * as THREE from "three";
import { CustomEffect } from "./Effects";
import { lerp } from "three/src/math/MathUtils.js";

const LINE_NB_POINTS = 1000;
const CURVE_AHEAD_AIRPLANE = 0.02;
const CURVE_AHEAD_CAMERA = 0.008;
const AIRPLANE_MAX_ANGLE = 35;

export const Experience = ({ curretState, setCurrentState }) => {
  const [curve, linePoints, shape, renderClouds, renderTexts] = CurveUtils();
  const cameraGroup = useRef();
  const airplane = useRef();
  const scroll = useScroll();
  const myText = new Text();

  useFrame((_state, delta) => {
    const scrollOffset = Math.max(0, scroll.offset);

    const curPoint = curve.getPoint(scrollOffset);
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    console.log("Scroll offset is: ", scrollOffset);

    if (scrollOffset > 0.15 && scrollOffset < 0.16) {
      setCurrentState(1);
    } else if (scrollOffset > 0.3 && scrollOffset < 0.31) {
      setCurrentState(2);
    } else if (scrollOffset > 0.5 && scrollOffset < 0.51) {
      setCurrentState(3);
    } else if (scrollOffset > 0.7 && scrollOffset < 0.71) {
      setCurrentState(4);
    } else if (scrollOffset > 0.86 && scrollOffset < 0.87) {
      setCurrentState(5);
    } else if (scrollOffset > 0.99) {
      setCurrentState(6);
    }

    const lookAtPoint = curve.getPoint(
      Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1)
    );
    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();
    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    const tangent = curve.getTangent(scrollOffset + CURVE_AHEAD_AIRPLANE);

    const nonLerpLookAt = new Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y
    );

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4;
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -AIRPLANE_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, AIRPLANE_MAX_ANGLE);
    }

    angle = (angleDegrees * Math.PI) / 180;

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angle
      )
    );
    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
  });
  return (
    <>
      <group ref={cameraGroup}>
        <CustomEffect />
        <Background />
        <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
        <group ref={airplane}>
          <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
            <Airplane rotation-y={Math.PI / 2} scale={[0.2, 0.2, 0.2]} />
          </Float>
        </group>
      </group>
      <group position-y={-2}>
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial color={"white"} opacity={0.7} transparent />
        </mesh>
      </group>
      {renderClouds()}
    </>
  );
};
