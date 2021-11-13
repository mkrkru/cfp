import { Heading, Text, Flex } from "@chakra-ui/react";

interface CardProps {
    id: string;
    image: any;
    w: number;
    h: number;
    text: string;
    phase: string;
    pos: any;
}

export default function Card({ id, image, w, h, text, phase, pos }: CardProps) {
    return <Flex
        className="revealClass"
        id={id}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
            position: "relative",
            borderRadius: "6px",
            boxShadow: "0px 30px 40px -20px #ffffff",
            padding: "24px",
            borderTop: `3px solid ${pos.borderTop}`,
            left: pos.left ? pos.left : null,
            right: pos.right ? pos.right : null
        }}
    >
        <Heading color="#9DD1F1" as="h3">Phase {phase}</Heading>
        <Text mx="5vh" mixW="40vh" maxW="50vh" color="#9DD1F1" fontSize="2xl">{text}</Text>
        <img style={{ borderRadius: "6px", pointerEvents: "none", width: w / 2.7, height: h / 2.7 }} src={image} alt=""/>
    </Flex>;
}
