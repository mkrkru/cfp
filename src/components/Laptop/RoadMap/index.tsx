import { VStack } from "@chakra-ui/react";
import Xarrow, { Xwrapper } from 'react-xarrows';
import Card from "./children/Card";
import Phase1 from "../../../public/phase1.png";
import Phase2 from "../../../public/phase2.png";
import Phase3 from "../../../public/phase3.png";
import Phase4 from "../../../public/phase4.png";

export function RoadMap() {
    return <Xwrapper>
        <VStack spacing="16vh" shouldWrapChildren={true}>
            <Card pos={{ right: "10vh", borderTop: "#ff5050" }} id={'elem1'} image={Phase1} w={800} h={800} text={"Frying Pans airdrop to three lucky holders."} phase={"1"} />
            <Card pos={{ left: "10vh", borderTop: "#ff923d" }} id={'elem2'} image={Phase2} w={866} h={454} text={"Distribution of the first unique collection."} phase={"2"} />
            <Card pos={{ right: "5vh", borderTop: "#f2ff3d" }} id={'elem3'} image={Phase3} w={726} h={413} text={"Аttracting holders to the possibility of receiving passive income."} phase={"3"} />
            <Card pos={{ left: "10vh", borderTop: "#50ff6f" }} id={'elem4'} image={Phase4} w={800} h={536} text={"Release of generative collection."} phase={"4"} />
        </VStack>

        <Xarrow start={'elem1'} end={'elem2'} animateDrawing={0.1} />
        <Xarrow start={'elem2'} end={'elem3'} animateDrawing={0.1} />
        <Xarrow start={'elem3'} end={'elem4'} animateDrawing={0.1} />
    </Xwrapper>;
}