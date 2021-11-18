import {
    useDisclosure,
    extendTheme,
    ChakraProvider,
    VStack,
    Text,
    Heading,
    Divider
} from "@chakra-ui/react";
import { Navbar, Footer, Title, RoadMap, NftCarousel } from "../components/Laptop";
import { useEffect } from "react";
import FirstImage from "../public/first.png";
import ScrollReveal from "scrollreveal";
import config from "../config";
import "@fontsource/abeezee";

export default function LaptopApp() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const Divide = () => <>
        <br />
        <Divider orientation="horizontal" w="80vh" />
        <br />
    </>;

    useEffect(() => {
        ScrollReveal().reveal('.revealClass', { delay: 100 });

        const Titles = ["CRYPTO", "FRYING", "PANS"];
        const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
        setInterval(() => document.title = Titles[randomInt(0, Titles.length - 1)], 3000);
    }, []);

    return <ChakraProvider theme={extendTheme({ fonts: { heading: "ABeeZee", body: "ABeeZee" } })}>
        <Navbar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

        <VStack spacing={24} py={24} bg={config.colors.dark} justify="center">
            <Title />

            <img alt="" className="revealClass" style={{ width: "1000px", height: "470px", borderRadius: "2px" }} src={FirstImage} />
            <Text className="revealClass" align="center" color={config.colors.lighter} fontSize="2xl" px={40}>
                Whether it's an experienced chef looking to delight a client with an extravagant dish or a newbie looking for homemade food, cooking a good meal starts with choosing the right dishes.
                That is why the production company REALPRESS, together with Crypto Frying Pans, invites you to become a part of a unique project, where you can watch the development of the enterprise in real time and receive your rewards from this.
            </Text>
            <Divide />

            <Heading fontStyle="italic" color={config.colors.lighter} as="h3">Who said that only food is cooked in a frying pan?</Heading>
            <NftCarousel />
            <br />

            <Text align="center" color={config.colors.lighter} fontSize="2xl" px={40}>
                CFP is a collection of 100 Frying Pan NFTs—unique digital collectibles living on the Ethereum blockchain Hundreds of unique custom pans are waiting for you with unexpected objects in it, each of which is hand-drawn and does not have a copy.
            </Text>
            <Divide />

            <Heading fontStyle="italic" color={config.colors.lighter} as="h2">Road Map</Heading>
            <RoadMap />
        </VStack>

        <Footer />
    </ChakraProvider>;
}