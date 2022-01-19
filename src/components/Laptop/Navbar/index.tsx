import { ButtonGroup, Flex, IconButton, Link, Image } from '@chakra-ui/react';
import icon from "../../../public/icon.png";
import { FaDiscord, FaTwitter } from "react-icons/fa";
// import Profile from "./children/Profile";
import opensea from "../../../public/opensea.png";

export function Navbar() {
    return <Flex flexDirection="column" pl="2vh" pr="6vh" style={{ position: "absolute", width: "100%", zIndex: 1000 }}>
        <Flex alignItems="center" justifyContent="space-between" h={16}>
            <img alt="" style={{ marginTop: "6vh", width: "100px", height: "100px" }} src={icon} />
            <Flex transform="scale(1.15)" alignItems="center" justifyContent="center" mt="4vh">
                <ButtonGroup>
                    <Link href="https://discord.gg/MWhFyQkvhn" isExternal>
                        <IconButton borderRadius="xl" color="white" bg="black" aria-label="Discord" _hover={{ backgroundColor: "#808080" }} icon={<FaDiscord fontSize="20px" />} />
                    </Link>
                    <Link href="https://twitter.com/CryptoPans" isExternal>
                        <IconButton borderRadius="xl" color="white" bg="black" aria-label="Twitter" _hover={{ backgroundColor: "#808080" }} icon={<FaTwitter fontSize="20px" />} />
                    </Link>
                    <Link href="https://opensea.io/collection/cfpc" isExternal>
                        <IconButton borderRadius="xl" color="white" bg="black" aria-label="OpenSea" _hover={{ backgroundColor: "#808080" }} icon={<Image w="20px" src={opensea} />} />
                    </Link>
                    {/* <Profile /> */}
                </ButtonGroup>
            </Flex>
        </Flex>
    </Flex>;
}