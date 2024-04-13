
import { Text } from "@react-three/drei"
import { title } from "process"

const textArray = [
    {
        title: "Experience",
        shortDescription: "exp description",
        description: "Detailed description",
        buttonLabel : 'ViewMore',
        positionArray : [],
    },
    {
        title : "Education",
        shortDescription: "edu description"
    },
    {
        title : "Skills",
        shortDescription: "skills description"
    },
    {
        title : "Achievements",
        shortDescription: "achievements"
    },
    {
        title : "Contact Me",
        shortDescription: "description"
    }
]

export const TextSection = ()=>{

    return (
        <>
            {textArray.map((textGroup, index)=>{
                return(
                    <group key={ index } position={textGroup.position}>
                        <Text color="white" anchorX="left" anchorY="middle" fontSize={0.22} maxWidth={2.5} font='./fonts/DMSerifDisplay-Regular.ttf'>
                            {textGroup.title}
                        </Text>
                        <Text color="white" anchorX="left" anchorY="middle" fontSize={0.22} maxWidth={2.5} font = "./fonts/Inter-Regular.ttf">
                            {textGroup.description}
                        </Text>
                    </group>
                )
            })}
        </>
    )
}