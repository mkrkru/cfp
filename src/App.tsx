import {
    useDisclosure,
    extendTheme,
    ChakraProvider,
    VStack,
    Text,
    Heading,
    Divider
} from "@chakra-ui/react";
import { Navbar, Footer, Title, RoadMap, NftCarousel, Team } from "./components/Laptop";
import FirstImage from "./public/first.png";
import { colors } from "./config";
import "@fontsource/abeezee";
import { motion, useTransform, useViewportScroll } from "framer-motion";

export default function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { scrollYProgress } = useViewportScroll();

    const Divide = () => <>
        <br />
        <Divider orientation="horizontal" w="80vh" />
        <br />
    </>;

    return <ChakraProvider theme={extendTheme({ fonts: { heading: "ABeeZee", body: "ABeeZee" } })}>
        <Navbar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

        <VStack spacing={24} pb={24} bg={colors.dark} justify="center">
            <motion.img style={{ scale: useTransform(scrollYProgress, [0, 0.1], [1, 0.5]) }} alt="" src={FirstImage} />
            <Title />

            <Text align="center" color={colors.lighter} fontSize="2xl" px={60}>
                Whether it's an experienced chef looking to delight a client with an extravagant dish or a newbie looking for homemade food, cooking a good meal starts with choosing the right dishes.
                <br />
                That is why the production company REALPRESS, together with Crypto Frying Pans, invites you to become a part of a unique project, where you can watch the development of the enterprise in real time and receive your rewards from this.
            </Text>
            <Divide />

            <Heading fontStyle="italic" color={colors.lighter} as="h3">Who said that only food is cooked in a frying pan?</Heading>
            <NftCarousel />
            <br />

            <Text align="center" color={colors.lighter} fontSize="2xl" px={40}>
                CFP is a collection of 100 Frying Pan NFTs—unique digital collectibles living on the Ethereum blockchain Hundreds of unique custom pans are waiting for you with unexpected objects in it, each of which is hand-drawn and does not have a copy.
            </Text>
            <Divide />

            <Heading fontStyle="italic" color={colors.lighter} fontSize="56px">Road Map</Heading>
            <RoadMap />
            <Divide />

            <Heading fontStyle="italic" color={colors.lighter} as="h2">Team</Heading>
            <Team />
        </VStack>

        <Footer />
    </ChakraProvider>;
}