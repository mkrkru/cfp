import { Heading, Text, Flex } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import { colors } from "../../../../config";

interface CardNoBlockProps {
    image: any;
    text: string;
    phase: string;
}

export default function CardNoBlock({ image, text, phase }: CardNoBlockProps) {
   return parseInt(phase) % 2 > 0
        ? <Fade left>
            <Flex
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <img style={{ borderRadius: "6px", pointerEvents: "none", width: 1620 / 4, height: 2160 / 4, marginRight: "4vh" }} src={image} alt="" />
                <Heading color={colors.lighter} as="h3" mx="6vh">Phase {phase}</Heading>
                <Text maxW="50vh" color={colors.lighter} fontSize="2xl">{text}</Text>
            </Flex>
        </Fade>
        : <Fade right>
           <Flex
               display="flex"
               justifyContent="space-between"
               alignItems="center"
           >
               <Heading color={colors.lighter} as="h3">Phase {phase}</Heading>
               <Text mx="4vh" maxW="50vh" color={colors.lighter} fontSize="2xl">{text}</Text>
               <img style={{ borderRadius: "6px", pointerEvents: "none", width: 1620 / 4, height: 2160 / 4 }} src={image} alt="" />
           </Flex>
       </Fade>;
}
