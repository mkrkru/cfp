import { ButtonGroup, Flex, IconButton, Link } from '@chakra-ui/react';
import Icon from "../../../public/icon.png";
import { FaDiscord, FaTwitter } from "react-icons/fa";
// import Profile from "./children/Profile";

export function Navbar() {
    return <Flex flexDirection="column" pl="2vh" pr="4vh" style={{ position: "absolute", width: "100%", zIndex: 1000 }}>
        <Flex alignItems="center" justifyContent="space-between" h={16}>
            <img alt="" style={{ marginTop: "6vh", width: "100px", height: "100px" }} src={Icon} />
            <Flex alignItems="center" justifyContent="center" mt="4vh">
                <ButtonGroup spacing={7}>
                    <Link href="https://discord.gg/MWhFyQkvhn" isExternal>
                        <IconButton transform="scale(1.5)" borderRadius="xl" color="white" bg="black" aria-label="Discord" _hover={{ color: "#808080" }} icon={<FaDiscord fontSize="20px" />} />
                    </Link>
                    <Link href="https://twitter.com/CryptoPans" isExternal>
                        <IconButton transform="scale(1.5)" borderRadius="xl" color="white" bg="black" aria-label="Twitter" _hover={{ color: "#808080" }} icon={<FaTwitter fontSize="20px" />} />
                    </Link>
                    {/*<Profile />*/}
                </ButtonGroup>
            </Flex>
        </Flex>
    </Flex>;
}