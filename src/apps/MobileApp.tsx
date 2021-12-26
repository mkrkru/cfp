import {
    extendTheme,
    ChakraProvider,
    VStack,
    Text,
    Heading,
    Divider, Link, Flex, Button
} from "@chakra-ui/react";
import { Navbar, Footer, Title, RoadMap, NftCarousel, Team } from "../components/Mobile";
import FirstImage from "../public/first.png";
import "@fontsource/abeezee";
import "./mint/style.css";
import onMint from "./mint/onMint";
import { useEthers } from "@usedapp/core";
import { useState } from "react";
import axios from "axios";

export default function MobileApp() {
    const { account } = useEthers();
    const [toDisplayMint, setMintDisplay] = useState(false);

    (async () => {
        const result = await axios.get("http://localhost:3002/list");
        setMintDisplay(result.data.includes(`${account}`));
    })();

    return <ChakraProvider theme={extendTheme({ fonts: { heading: "ABeeZee", body: "ABeeZee" } })}>
        <VStack spacing={24} pb={24} bg={"#000000"}>
            <Flex>
                <Navbar />
                <img alt="" src={FirstImage} />
            </Flex>

            <br />
            <Title />
            <br />

            {// @ts-ignore
                toDisplayMint
                    ? <Button
                        className="mintButton"
                        style={{
                            backgroundColor: "white",
                            width: "20vh",
                            height: "10vh"
                        }}
                        onClick={onMint} />
                    : null}

            <br />

            <Text align="center" color="white" fontSize="50px" px={20}>
                Whether it's an experienced chef looking to delight a customer with an extravagant meal, or an amateur cooking homemade food, they all need good quality pans.
                <br />
                <br />
                Company-manufacture-plant <Link href={"https://realpress.ru"} color={"#808080"} _hover={{ textDecoration: "none", borderBottom: "1px dotted #e0d16c" }} isExternal>realpress.ru</Link> together with CryptoFryingPans invites you to become a member of a unique project where fantasy is intertwined with reality, where familiar pans cook the most unusual dishes, where the pans themselves can be anything and anyone…
                <br />
                <br />
                <Text fontWeight="bold">Join us and get your benefit!</Text>
            </Text>
            <Divider orientation="horizontal" w="30vh" />

            <Heading fontStyle="italic" color="white" px={20} fontSize="60px" textAlign="center">Who said that only food is cooked in a frying pan?</Heading>
            <NftCarousel />
            <br />

            <Text align="center" color="white" fontSize="50px" px={20}>
                CFP is a collection of 100 Frying Pan NFTs—unique digital collectibles living on the Ethereum blockchain Hundreds of unique custom pans are waiting for you with unexpected objects in it, each of which is hand-drawn and does not have a copy.
            </Text>
            <br />
            <Divider orientation="horizontal" w="30vh" />
            <br />

            <Heading fontStyle="italic" color="white" fontSize="80px" textAlign="center">Road Map</Heading>
            <RoadMap />
            <br />
            <Divider orientation="horizontal" w="30vh" />
            <br />

            <Heading fontStyle="italic" color="white" fontSize="80px" textAlign="center">Team</Heading>
            <br />
            <Team />
        </VStack>

        <Footer />
    </ChakraProvider>;
}