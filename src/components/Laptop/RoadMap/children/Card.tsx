import { Heading, Text, Flex } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import { colors } from "../../../../config";

interface CardProps {
    image: any;
    w: number;
    h: number;
    text: string;
    phase: string;
    pos: any;
}

export default function Card({ image, w, h, text, phase, pos }: CardProps) {
    const Main = <Flex
        className="revealClass"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
            position: "relative",
            borderRadius: "6px",
            boxShadow: "0px 30px 40px -20px #aaaaaa",
            padding: "24px",
            borderTop: `2px solid ${pos.borderTop}`,
            left: pos.left ? pos.left : null,
            right: pos.right ? pos.right : null
        }}
    >
        <Heading color="white" as="h3">Phase {phase}</Heading>
        <Text mx="5vh" mixW="40vh" maxW="50vh" color="white" fontSize="2xl">{text}</Text>
        <img style={{ borderRadius: "6px", pointerEvents: "none", width: w / 2.7, height: h / 2.7 }} src={image} alt=""/>
    </Flex>;

    return ["1", "3"].includes(phase) ? <Fade left>{Main}</Fade> : <Fade right>{Main}</Fade>;
}
