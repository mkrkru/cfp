import { VStack, Heading, Text } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import CardNoBlock from "./children/CardNoBlock";
import Phase1 from "../../../public/phase1.png";
import Phase2 from "../../../public/phase2.png";
import Phase3 from "../../../public/phase3.png";
import Phase4 from "../../../public/phase4.png";
import Phase5 from "../../../public/phase5.png";
import { phases } from "../../../config";

export function RoadMap() {
    return <VStack shouldWrapChildren={true}>
        <Heading color="white">Stage 1</Heading>
        <CardNoBlock image={Phase1} text={phases[0]} phase={"1"} />
        <CardNoBlock image={Phase2} text={phases[1]} phase={"2"} />
        <CardNoBlock image={Phase3} text={phases[2]} phase={"3"} />
        <CardNoBlock image={Phase4} text={phases[3]} phase={"4"} />
        <CardNoBlock image={Phase5} text={phases[4]} phase={"5"} />
        <Heading color="white">Stage 2</Heading>
        <br />
        <br />
        <Fade right><Text color="white" fontSize="2xl">Coming soon...</Text></Fade>
    </VStack>;
}