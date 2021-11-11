import Draggable from "react-draggable";
import { useXarrow } from "react-xarrows";
import { Heading, Text } from "@chakra-ui/react";

interface CardProps {
    id: any;
    image: any;
    w: any;
    h: any;
    text: any;
    phase: any;
}

export default function Card({ id, image, w, h, text, phase }: CardProps) {
    const updateXarrow = useXarrow();

    return <Draggable onStart={updateXarrow} onDrag={updateXarrow} onStop={updateXarrow}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} id={id}>
            <div style={{ textAlign: "center", borderRadius: "6px", boxShadow: "0px 30px 40px -20px hsl(229, 6%, 66%)", padding: "24px", borderTop: "3px solid hsl(0, 78%, 62%)" }}>Frying Pans airdrop to three lucky holders.
                <Heading color="white" as="h3">Phase {phase}</Heading>
                <Text marginTop={2} marginBottom={6} maxW="40vh" color="white" fontSize="2xl">{text}</Text>
                <img style={{ borderRadius: "6px", pointerEvents: "none", width: w / 2.7, height: h / 2.7 }} src={image} alt="" />
            </div>
        </div>
    </Draggable>;
}