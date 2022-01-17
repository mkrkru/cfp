import {
    extendTheme,
    ChakraProvider,
    VStack,
    Text,
    Heading,
    Divider,
    Link,
    Flex,
    Image
} from "@chakra-ui/react";
import { Navbar, Footer, Title, RoadMap, NftCarousel, Team } from "../components/Laptop";
import FirstImage from "../public/first.png";
import "@fontsource/abeezee";
import onMint from "./mint/onMint";
import { useEthers } from "@usedapp/core";
import axios from "axios";
import { useState, useEffect } from "react";
import sticker1 from "../public/mint.gif";

export default function LaptopApp() {
    if (window.location.href.includes("http://cryptofryingpans.com")) window.location.href = window.location.href.replace("http://", "https://");
    const [allowMint, setAllowMint] = useState(false);
    const { account } = useEthers();

    useEffect(() => {
        (async () => {
            const allwl = await axios.get("http://localhost:3002/wl");
            setAllowMint(allwl.data.includes(account));
        })();
    }, [account]);

    return <ChakraProvider theme={extendTheme({ fonts: { heading: "ABeeZee", body: "ABeeZee" } })}>
        <VStack spacing={24} pb={18} bg={"#000000"} justify="center">
            {/*<motion.img style={{ scale: useTransform(scrollYProgress, [0, 0.1], [1, 0.5]) }} alt="" src={FirstImage} />*/}

            <Flex>
                <Navbar />
                <div style={{ position: "relative" }}>
                    <img src={FirstImage} alt="" style={{ pointerEvents: "none", width: window.innerWidth }} />
                    {allowMint ? <Image
                        left="53%"
                        top="53%"
                        position="absolute"
                        width="200px"
                        src={sticker1}
                        _hover={{ cursor: "pointer" }}
                        onClick={() => account ? onMint(account) : null}
                    /> : null}
                </div>
            </Flex>

            <br />
            <Title />
            <br />

            <Text align="center" color="white" fontSize="3xl" px={60}>
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

            <Text align="center" color="white" fontSize="3xl" px={60}>
                CFP is a collection of Frying Pans NFTs (unique digital collectibles living on the Ethereum blockchain).
                <br />
                <br />
                Here you will find unique custom NFTs drawn in single copies and also generative pans NFTs that will surprise you with variety and unexpected details! Even if you think frying pans is a boring topic for housewives, our project will change your mind!
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
            
            <br />
            <Text color="white" fontSize="20px" fontWeight="bolder">Verified Contract Address <Link href="https://etherscan.io/address/0xF48549f4969565b6c87788D6312EF648Db864e89" color="green">0xF48549f4969565b6c87788D6312EF648Db864e89</Link></Text>
        </VStack>

        <Footer />
    </ChakraProvider>;
}