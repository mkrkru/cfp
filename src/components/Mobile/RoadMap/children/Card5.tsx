import { Heading, Text, Flex } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import Phase5 from "../../../../public/phase5.png";

export default function Card5() {
    return <Fade left>
        <Flex
            mb="8vh"
            mx="4vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <img style={{ borderRadius: "6px", pointerEvents: "none", margin: "-6vh 0 -8vh 0" }} src={Phase5} alt="" />
            <Heading color="white" minW="8vh" my="2vh" fontSize="50px">Phase 5</Heading>
            <Text color="white" fontSize="50px" textAlign="center">The first stage is cooked! Mint of the generative collection! The best day for owners of custom NFT from the first hundred!</Text>
        </Flex>
    </Fade>;
}
