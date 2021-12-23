import { VStack, Heading, Text } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import Card1 from "./children/Card1";
import Card2 from "./children/Card2";
import Card3 from "./children/Card3";
import Card4 from "./children/Card4";
import Card5 from "./children/Card5";

export function RoadMap() {
    return <VStack shouldWrapChildren={true}>
        <Heading color="white" fontSize="60px">Stage 1</Heading>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Heading color="white" fontSize="60px">Stage 2</Heading>
        <br />
        <br />
        <Fade right><Text color="white" fontSize="50px">Coming soon...</Text></Fade>
    </VStack>;
}