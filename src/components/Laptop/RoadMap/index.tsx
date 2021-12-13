import { VStack, Heading, Text } from "@chakra-ui/react";
import CardNoBlock from "./children/CardNoBlock";
import Phase1 from "../../../public/phase1.png";
import Phase2 from "../../../public/phase2.png";
import Phase3 from "../../../public/phase3.png";
import Phase4 from "../../../public/phase4.png";
import Phase5 from "../../../public/phase5.png";

const titles = [
    "Light stove! Warming up the audience! Contests, giveaways, lotteries! Website and Discord creation!",
    "It’s getting hotter! Mint of the first free custom collection of 100 NFTs!",
    "The oil is already boiling! Embodiment into reality! No merch, no 3d models like everyone doing! More realistic, more useful, more cool...",
    "Smells fried! Generative collection creation!",
    "The first stage is cooked! Mint of the generative collection! The best day for owners of custom NFT from the first hundred!"
];

export function RoadMap() {
    return <VStack shouldWrapChildren={true}>
        <Heading color="white">Stage 1</Heading>
        <CardNoBlock image={Phase1} text={titles[0]} phase={"1"} />
        <CardNoBlock image={Phase2} text={titles[1]} phase={"2"} />
        <CardNoBlock image={Phase3} text={titles[2]} phase={"3"} />
        <CardNoBlock image={Phase4} text={titles[3]} phase={"4"} />
        <CardNoBlock image={Phase5} text={titles[4]} phase={"5"} />
        <Heading color="white">Stage 2</Heading>
        <br />
        <br />
        <Text color="white" fontSize="2xl">Coming soon...</Text>
    </VStack>;
}