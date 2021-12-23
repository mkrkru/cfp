import { Heading, Text, Flex } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import Phase2 from "../../../../public/phase2.png";

export default function Card2() {
    return <Fade right>
        <Flex
            mb="8vh"
            mx="4vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <img style={{ borderRadius: "6px", pointerEvents: "none" }} src={Phase2} alt="" />
            <Heading color="white" minW="8vh" my="2vh" fontSize="50px">Phase 2</Heading>
            <Text color="white" fontSize="50px" textAlign="center">It’s getting hotter! Mint of the first free custom collection of 100 NFTs!</Text>
        </Flex>
    </Fade>;
}
