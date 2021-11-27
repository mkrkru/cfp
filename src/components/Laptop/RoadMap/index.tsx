import { VStack } from "@chakra-ui/react";
// import Card from "./children/Card";
import CardNoBlock from "./children/CardNoBlock";
import Phase1 from "../../../public/phase1.png";
import Phase2 from "../../../public/phase2.png";
import Phase3 from "../../../public/phase3.png";
import Phase4 from "../../../public/phase4.png";

export function RoadMap() {
    return <VStack spacing="10vh" shouldWrapChildren={true}>
        <CardNoBlock pos={{ right: "10vh" }} id={'elem1'} image={Phase1} w={800} h={800} text={"Frying Pans airdrop to three lucky holders."} phase={"1"} />
        <CardNoBlock pos={{ left: "10vh" }} id={'elem2'} image={Phase2} w={866} h={454} text={"Distribution of the first unique collection."} phase={"2"} />
        <CardNoBlock pos={{ right: "5vh" }} id={'elem3'} image={Phase3} w={726} h={413} text={"Attracting holders to the possibility of receiving passive income."} phase={"3"} />
        <CardNoBlock pos={{ left: "10vh" }} id={'elem4'} image={Phase4} w={800} h={536} text={"Release of generative collection."} phase={"4"} />
        {/*<Card pos={{ right: "10vh", borderTop: "#ff5050" }} id={'elem1'} image={Phase1} w={800} h={800} text={"Frying Pans airdrop to three lucky holders."} phase={"1"} />*/}
        {/*<Card pos={{ left: "10vh", borderTop: "#ff923d" }} id={'elem2'} image={Phase2} w={866} h={454} text={"Distribution of the first unique collection."} phase={"2"} />*/}
        {/*<Card pos={{ right: "5vh", borderTop: "#f2ff3d" }} id={'elem3'} image={Phase3} w={726} h={413} text={"Attracting holders to the possibility of receiving passive income."} phase={"3"} />*/}
        {/*<Card pos={{ left: "10vh", borderTop: "#50ff6f" }} id={'elem4'} image={Phase4} w={800} h={536} text={"Release of generative collection."} phase={"4"} />*/}
    </VStack>;
}