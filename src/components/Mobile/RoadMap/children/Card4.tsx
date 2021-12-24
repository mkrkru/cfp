import { Heading, Text, Flex } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import Phase4 from "../../../../public/phase4.png";
import { phases } from "../../../../config";

export default function Card4() {
    return <Fade right>
        <Flex
            mb="8vh"
            mx="4vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <img style={{ borderRadius: "6px", pointerEvents: "none", margin: "-6vh 0 -6vh 0" }} src={Phase4} alt="" />
            <Heading color="white" minW="8vh" my="2vh" fontSize="50px">Phase 4</Heading>
            <Text color="white" fontSize="50px" textAlign="center">{phases[3]}</Text>
        </Flex>
    </Fade>;
}
