import {
    useDisclosure,
    ChakraProvider,
    VStack,
    Text,
    Heading,
    Divider
} from "@chakra-ui/react";
import { Navbar, Footer, NoWallet, Title, RoadMap, NftCarousel } from "../components/Laptop";
import { useEffect } from "react";
import FirstImage from "../public/first.png";

export default function LaptopApp() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const Divide = () => <>
        <br />
        <Divider orientation="horizontal" w="80vh" />
        <br />
    </>;

    useEffect(() => {
        const Titles = ["CRYPTO", "FRYING", "PANS"];
        const randomorg = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
        setInterval(() => document.title = Titles[randomorg(0, Titles.length - 1)], 3000);
    }, []);

    // @ts-ignore
    if (!window.ethereum) return <NoWallet />;

    return <ChakraProvider>
        <Navbar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

        <VStack spacing={24} py={24} bg="gray.800" justify="center">
            <Title />

            <img alt="" style={{ width: "589px", height: "334px" }} src={FirstImage} />
            <Text align="center" color="white" fontSize="2xl" px={40}>
                Whether it's an experienced chef looking to delight a client with an extravagant dish or a newbie looking for homemade food, cooking a good meal starts with choosing the right dishes.
                That is why the production company REALPRESS, together with Crypto Frying Pans, invites you to become a part of a unique project, where you can watch the development of the enterprise in real time and receive your rewards from this.
            </Text>
            <Divide />

            <Heading fontStyle="italic" color="white" as="h3">Who said that only food is cooked in a frying pan?</Heading>
            <NftCarousel />
            <br />

            <Text align="center" color="white" fontSize="2xl" px={40}>
                CFP is a collection of 100 Frying Pan NFTs—unique digital collectibles living on the Ethereum blockchain Hundreds of unique custom pans are waiting for you with unexpected objects in it, each of which is hand-drawn and does not have a copy.
            </Text>
            <Divide />

            <Heading fontStyle="italic"  color="white" as="h2">Road Map</Heading>
            <RoadMap />
        </VStack>

        <Footer />
    </ChakraProvider>;
}