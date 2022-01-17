import {
    Flex,
    Link,
    IconButton,
    ButtonGroup,
    Image
} from '@chakra-ui/react';
import Icon from "../../../public/icon.png";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import opensea from "../../../public/opensea.png";

export function Navbar() {
    return <Flex flexDirection="column" pl="1vh" pr="3vh" pt="2vh" style={{ position: "absolute", width: "100%", zIndex: 1000 }}>
        <Flex alignItems="center" justifyContent="space-between">
            <Link href={"/"}><img alt="" style={{ width: "130px", height: "130px" }} src={Icon} /></Link>
            <ButtonGroup spacing={20}>
                <Link href="https://discord.gg/MWhFyQkvhn" isExternal>
                    <IconButton style={{ transform: "scale(2.5)" }} borderRadius="xl" color="white" bg="black" aria-label="Discord" _hover={{ backgroundColor: "#808080" }} icon={<FaDiscord fontSize="20px" />} />
                </Link>
                <Link href="https://twitter.com/CryptoPans" isExternal>
                    <IconButton style={{ transform: "scale(2.5)" }} borderRadius="xl" color="white" bg="black" aria-label="Twitter" _hover={{ backgroundColor: "#808080" }} icon={<FaTwitter fontSize="20px" />} />
                </Link>
                <Link href="https://opensea.io/collection/cfpc" isExternal>
                    <IconButton style={{ transform: "scale(2.5)" }} borderRadius="xl" color="white" bg="black" aria-label="OpenSea" _hover={{ backgroundColor: "#808080" }} icon={<Image w="20px" src={opensea} />} />
                </Link>
            </ButtonGroup>
        </Flex>
    </Flex>;
}