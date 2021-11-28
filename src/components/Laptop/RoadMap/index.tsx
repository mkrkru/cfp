import { VStack } from "@chakra-ui/react";
import CardNoBlock from "./children/CardNoBlock";
import Phase1 from "../../../public/phase1.png";
import Phase2 from "../../../public/phase2.png";
import Phase3 from "../../../public/phase3.png";
import Phase4 from "../../../public/phase4.png";

export function RoadMap() {
    return <VStack spacing="10vh" shouldWrapChildren={true}>
        <CardNoBlock color="#ff5050" pos={{ right: "10%" }} image={Phase1} w={800} h={800} text={"Frying Pans airdrop to three lucky holders."} phase={"1"} />
        <CardNoBlock color="#ff923d" pos={{ left: "10%" }} image={Phase2} w={866} h={454} text={"Distribution of the first unique collection."} phase={"2"} />
        <CardNoBlock color="#f2ff3d" pos={{ right: "5%" }} image={Phase3} w={726} h={413} text={"Attracting holders to the possibility of receiving passive income."} phase={"3"} />
        <CardNoBlock color="#50ff6f" pos={{ left: "10%" }} image={Phase4} w={800} h={536} text={"Release of generative collection."} phase={"4"} />
    </VStack>;
}