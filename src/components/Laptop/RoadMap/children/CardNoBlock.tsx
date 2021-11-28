import { Heading, Text, Flex } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import { colors } from "../../../../config";

interface CardNoBlockProps {
    image: any;
    w: number;
    h: number;
    text: string;
    phase: string;
    pos: any;
    color: string;
}

export default function CardNoBlock({ image, w, h, text, phase, pos, color }: CardNoBlockProps) {
    const Main = <Flex
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
            position: "relative",
            left: pos.left ? pos.left : null,
            right: pos.right ? pos.right : null
        }}
    >
        <Heading color={color} as="h3">Phase {phase}</Heading>
        <Text mx="4vh" maxW="50vh" color={colors.lighter} fontSize="2xl">{text}</Text>
        <img style={{ borderRadius: "6px", pointerEvents: "none", width: w / 2.7, height: h / 2.7 }} src={image} alt="" />
    </Flex>;

    return ["1", "3"].includes(phase) ? <Fade left>{Main}</Fade> : <Fade right>{Main}</Fade>;
}
