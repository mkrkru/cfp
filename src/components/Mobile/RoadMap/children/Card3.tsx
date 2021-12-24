import { Heading, Text, Flex } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import Phase3 from "../../../../public/phase3.png";
import { phases } from "../../../../config";

export default function Card3() {
    return <Fade left>
        <Flex
            mb="8vh"
            mx="4vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <img style={{ borderRadius: "6px", pointerEvents: "none", margin: "-6vh 0 -8vh 0" }} src={Phase3} alt="" />
            <Heading color="white" minW="8vh" my="2vh" fontSize="50px">Phase 3</Heading>
            <Text color="white" fontSize="50px" textAlign="center">{phases[2]}</Text>
        </Flex>
    </Fade>;
}
