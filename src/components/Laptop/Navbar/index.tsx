import { ButtonGroup, Flex, IconButton, Link } from '@chakra-ui/react';
import Icon from "../../../public/icon.png";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import Profile from "./children/Profile";

export function Navbar() {
    return <Flex flexDirection="column" px="2vh" style={{ position: "absolute", width: "100%", zIndex: 1000 }}>
        <Flex alignItems="center" justifyContent="space-between" h={16}>
            <Link href={"/"} mt="2vh"><img alt="" style={{ width: "60px", height: "60px" }} src={Icon} /></Link>
            <Flex alignItems="center" justifyContent="center">
                <ButtonGroup>
                    <Link href="https://discord.gg/MWhFyQkvhn" isExternal>
                        <IconButton borderRadius="xl" color="white" bg="black" aria-label="Discord" _hover={{ color: "#808080" }} icon={<FaDiscord fontSize="20px" />} />
                    </Link>
                    <Link href="https://twitter.com/CryptoPans" isExternal>
                        <IconButton borderRadius="xl" color="white" bg="black" aria-label="Twitter" _hover={{ color: "#808080" }} icon={<FaTwitter fontSize="20px" />} />
                    </Link>
                    <Profile />
                </ButtonGroup>
            </Flex>
        </Flex>
    </Flex>;
}