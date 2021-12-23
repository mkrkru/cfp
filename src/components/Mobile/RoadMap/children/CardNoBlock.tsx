import { Heading, Text, Flex } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

interface CardNoBlockProps {
    image: any;
    text: string;
    phase: string;
}

export default function CardNoBlock({ image, text, phase }: CardNoBlockProps) {
   return parseInt(phase) % 2 > 0
        ? <Fade left>
            <Flex
                mx="6vh"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <img style={{ borderRadius: "6px", pointerEvents: "none", width: "35%" }} src={image} alt="" />
                <Heading color="white" mx="2vh" minW="8vh">Phase {phase}</Heading>
                <Text color="white" fontSize="50px">{text}</Text>
            </Flex>
        </Fade>
        : <Fade right>
           <Flex
               mx="6vh"
               display="flex"
               justifyContent="space-between"
               alignItems="center"
           >
               <Heading color="white" as="h3">Phase {phase}</Heading>
               <Text mx="4vh" maxW="50vh" color="white" fontSize="2xl">{text}</Text>
               <img style={{ borderRadius: "6px", pointerEvents: "none", width: "35%" }} src={image} alt="" />
           </Flex>
       </Fade>;
}
