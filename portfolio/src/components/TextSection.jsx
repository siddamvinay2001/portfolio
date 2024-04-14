import { useMemo } from "react";
import { Vector3 } from "three"; // Import Vector3

import * as THREE from "three";
const LINE_NB_POINTS = 10000;
const CURVE_DISTANCE = 250;

export const TextSection = ({currentState, setCurrentState}) => {
  const texts = [];
  const textConfigs = [
    {
      id: 1,
      title: "Work Experience",
      description: "IC2",
    },
    {
      id: 2,
      title: "Skills",
      description: "HTML,CSS",
    },
    {
      id: 3,
      title: "Projects",
      subtitle: "Our flight attendants will help you have a great journey",
    },
    {
      id: 4,
      title: "Movies",
      subtitle: "We provide a large selection of media...",
    },
  ];

  return (
    <div>
      {textConfigs.map((config, index) => (
        <div
          key={`text-${index}`}
          className="absolute text-black text-sm bg-white shadow-lg rounded-lg p-4 max-w-xs"
          style={{
            fontSize: "0.3rem",
            lineHeight: "1.5",
            left: `50%`, // Center horizontally on the screen
            top: `50%`, // Center vertically on the screen
            transform: `translate3d(${config.position.x}px, ${config.position.y}px, ${config.position.z}px)`, // Use translate3d for 3D positioning
          }}
        >
          <div className="font-bold">{config.title}</div>
          {config.description && <div>{config.description}</div>}
          {config.subtitle && <div>{config.subtitle}</div>}
        </div>
      ))}
    </div>
  );
};
