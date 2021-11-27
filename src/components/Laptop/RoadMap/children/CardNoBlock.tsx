import { Heading, Text, Flex } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import config from "../../../../config";

interface CardNoBlockProps {
    id: string;
    image: any;
    w: number;
    h: number;
    text: string;
    phase: string;
    pos: any;
}

export default function CardNoBlock({ id, image, w, h, text, phase, pos }: CardNoBlockProps) {
    const Main = <Flex
        id={id}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
            position: "relative",
            left: pos.left ? pos.left : null,
            right: pos.right ? pos.right : null
        }}
    >
        <Heading color={config.colors.lighter} as="h3">Phase {phase}</Heading>
        <Text mx="4vh" maxW="50vh" color={config.colors.lighter} fontSize="2xl">{text}</Text>
        <img style={{ borderRadius: "6px", pointerEvents: "none", width: w / 2.7, height: h / 2.7 }} src={image} alt=""/>
    </Flex>;

    return ["1", "3"].includes(phase) ? <Fade left>{Main}</Fade> : <Fade right>{Main}</Fade>;
}
