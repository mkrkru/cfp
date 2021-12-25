import {
    useDisclosure,
    extendTheme,
    ChakraProvider,
    VStack,
    Text,
    Heading,
    Divider,
    Link,
    Flex
} from "@chakra-ui/react";
import { Navbar, Footer, Title, RoadMap, NftCarousel, Team } from "../components/Laptop";
import FirstImage from "../public/first.png";
import "@fontsource/abeezee";
// import { motion, useTransform, useViewportScroll } from "framer-motion";

export default function LaptopApp() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const { scrollYProgress } = useViewportScroll();

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
                Company-manufacture-plant <Link href={"https://realpress.ru"} color={"#808080"} _hover={{ textDecoration: "none", borderBottom: "1px dotted #e0d16c" }} isExternal>realpress.ru</Link> together with CryptoFryingPans invites you to become a member of a unique project where fantasy is intertwined with reality, where familiar pans cook the most unusual dishes, where the pans themselves can be anything and anyone…
                <br />
                <br />
                <Text fontWeight="bold">Join us and get your benefit!</Text>
            </Text>
            <Divider orientation="horizontal" w="80vh" />

            <Heading fontStyle="italic" color="white" as="h3">Who said that only food is cooked in a frying pan?</Heading>
            <NftCarousel />
            <br />

            <Text align="center" color="white" fontSize="2xl" px={40}>
                CFP is a collection of 100 Frying Pan NFTs—unique digital collectibles living on the Ethereum blockchain Hundreds of unique custom pans are waiting for you with unexpected objects in it, each of which is hand-drawn and does not have a copy.
            </Text>
            <br />
            <Divider orientation="horizontal" w="80vh" />
            <br />

            <Heading fontStyle="italic" color="white" fontSize="56px">Road Map</Heading>
            <RoadMap />
            <br />
            <Divider orientation="horizontal" w="80vh" />

            <Heading fontStyle="italic" color="white" fontSize="56px">Team</Heading>
            <Team />
        </VStack>

        <Footer />
    </ChakraProvider>;
}