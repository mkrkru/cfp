import {
    useDisclosure,
    extendTheme,
    ChakraProvider,
    VStack,
    Text,
    Heading,
    Divider, Link, Flex
} from "@chakra-ui/react";
import { Navbar, Footer, Title, RoadMap, NftCarousel } from "./components/Laptop";
import FirstImage from "./public/first.png";
import { colors } from "./config";
import "@fontsource/abeezee";
// import { motion, useTransform, useViewportScroll } from "framer-motion";

export default function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const { scrollYProgress } = useViewportScroll();

    const Divide = () => <>
        <br />
        <Divider orientation="horizontal" w="80vh" />
        <br />
    </>;

    return <ChakraProvider theme={extendTheme({ fonts: { heading: "ABeeZee", body: "ABeeZee" } })}>
        <VStack spacing={24} pb={24} bg={"#000000"} justify="center">
            {/*<motion.img style={{ scale: useTransform(scrollYProgress, [0, 0.1], [1, 0.5]) }} alt="" src={FirstImage} />*/}

            <Flex>
                <Navbar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                <img alt="" src={FirstImage} />
            </Flex>

            <Title />

            <Text align="center" color="white" fontSize="2xl" px={60}>
                Whether it's an experienced chef looking to delight a customer with an extravagant meal, or an amateur cooking homemade food, they all need good quality pans.
                <br />
                <br />
                Company-manufacture-plant <Link to={"https://realpress.ru"} color={colors.gray} isExternal>realpress.ru</Link> together with CryptoFryingPans invites you to become a member of a unique project where fantasy is intertwined with reality, where familiar pans cook the most unusual dishes, where the pans themselves can be anything and anyone…
                <br />
                <br />
                Join us and get your benefit!
            </Text>
            <Divider orientation="horizontal" w="80vh" />

            <Heading fontStyle="italic" color="white" as="h3">Who said that only food is cooked in a frying pan?</Heading>
            <NftCarousel />
            <br />

            <Text align="center" color="white" fontSize="2xl" px={40}>
                CFP is a collection of 100 Frying Pan NFTs—unique digital collectibles living on the Ethereum blockchain Hundreds of unique custom pans are waiting for you with unexpected objects in it, each of which is hand-drawn and does not have a copy.
            </Text>
            <Divide />

            <Heading fontStyle="italic" color="white" fontSize="56px">Road Map</Heading>
            <RoadMap />
            {/*<Divide />*/}

            {/*<Heading fontStyle="italic" color="white" as="h2">Team</Heading>*/}
            {/*<Team />*/}
        </VStack>

        <Footer />
    </ChakraProvider>;
}