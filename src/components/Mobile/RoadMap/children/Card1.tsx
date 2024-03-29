import { Heading, Text, Flex } from "@chakra-ui/react";
// import Fade from "react-reveal/Fade";
import Phase1 from "../../../../public/phase1.png";
import { phases } from "../../../../config";

export default function Card1() {
    return <Flex
            mb="8vh"
            mx="4vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <img style={{ borderRadius: "6px", pointerEvents: "none", margin: "-2vh 0 -10vh 0" }} src={Phase1} alt="" />
            <Heading color="white" minW="8vh" my="2vh" fontSize="50px">Phase 1</Heading>
            <Text color="white" fontSize="50px" textAlign="center">{phases[0]}</Text>
        </Flex>;
}
