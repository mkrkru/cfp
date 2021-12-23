import {
    Flex,
    Link,IconButton, ButtonGroup
} from '@chakra-ui/react';
import Icon from "../../../public/icon.png";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { colors } from "../../../config";

export function Navbar() {
    return <Flex flexDirection="column" pl="1vh" pr="3vh" style={{ position: "absolute", width: "100%", zIndex: 1000 }}>
        <Flex alignItems="center" justifyContent="space-between" h={50}>
            <Link href={"/"}><img alt="" style={{ marginTop: "6vh", width: "130px", height: "130px" }} src={Icon} /></Link>
            {/*<Mint />*/}
            <ButtonGroup mt="4vh">
                <Link href="https://discord.gg/MWhFyQkvhn" isExternal>
                    <IconButton borderRadius="xl" color="white" bg="black" aria-label="Discord" _hover={{ color: colors.gray }} icon={<FaDiscord fontSize="55px" />} />
                </Link>
                <Link href="https://twitter.com/CryptoPans" isExternal>
                    <IconButton borderRadius="xl" color="white" bg="black" aria-label="Twitter" _hover={{ color: colors.gray }} icon={<FaTwitter fontSize="55px" />} />
                </Link>
                <Link href="https://instagram.com/" isExternal>
                    <IconButton borderRadius="xl" color="white" bg="black" aria-label="Instagram" _hover={{ color: colors.gray }} icon={<FaInstagram fontSize="55px" />} />
                </Link>
            </ButtonGroup>
            {/*<HamburgerIcon onClick={onOpen} borderRadius="xl" color="white" w="60px" h="60px" />*/}
            {/*<Drawer*/}
            {/*    isOpen={isOpen}*/}
            {/*    placement='right'*/}
            {/*    onClose={onClose}*/}
            {/*    size="md"*/}
            {/*>*/}
            {/*    <DrawerOverlay />*/}
            {/*    <DrawerContent>*/}
            {/*        <DrawerBody bg="black">*/}
            {/*            <VStack alignContent="center">*/}
            {/*                <Profile />*/}
            {/*                <Link href="https://discord.gg/MWhFyQkvhn" isExternal><Button style={{ justifyContent: "space=between", fontSize: "50px", padding: "20px" }}><FaDiscord />Discord</Button></Link>*/}
            {/*                <Link href="https://twitter.com/CryptoPans" isExternal><Button style={{ justifyContent: "space=between" }}><FaTwitter />Twitter</Button></Link>*/}
            {/*                <Link href="https://instagram.com/" isExternal><Button style={{ justifyContent: "space=between" }}><FaInstagram />Instagram</Button></Link>*/}
            {/*            </VStack>*/}
            {/*        </DrawerBody>*/}
            {/*    </DrawerContent>*/}
            {/*</Drawer>*/}
        </Flex>
    </Flex>;
}