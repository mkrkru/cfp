import { ButtonGroup, Flex, IconButton, Link } from '@chakra-ui/react';
import Icon from "../../../public/icon.png";
import Profile from "./children/Profile";
import AccountModal from "./children/AccountModal";
import { colors } from "../../../config";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

interface NavbarProps {
    isOpen: any;
    onOpen: any;
    onClose: any;
};

export function Navbar({ isOpen, onOpen, onClose }: NavbarProps) {
    return <Flex flexDirection="column" px="2vh" style={{ position: "absolute", width: "100%", zIndex: 1000 }}>
        <Flex alignItems="center" justifyContent="space-between" h={16}>
            <Link href={"/"} mt="2vh"><img alt="" style={{ width: "60px", height: "60px" }} src={Icon} /></Link>
            {/*<Mint />*/}
            <Flex alignItems="center" justifyContent="center">
                <ButtonGroup>
                    <Link href="https://discord.gg/MWhFyQkvhn" isExternal>
                        <IconButton borderRadius="xl" color="white" bg="black" aria-label="Discord" _hover={{ color: colors.gray }} icon={<FaDiscord fontSize="20px" />} />
                    </Link>
                    <Link href="https://twitter.com/CryptoPans" isExternal>
                        <IconButton borderRadius="xl" color="white" bg="black" aria-label="Twitter" _hover={{ color: colors.gray }} icon={<FaTwitter fontSize="20px" />} />
                    </Link>
                    <Link href="https://instagram.com/" isExternal>
                        <IconButton borderRadius="xl" color="white" bg="black" aria-label="Instagram" _hover={{ color: colors.gray }} icon={<FaInstagram fontSize="20px" />} />
                    </Link>
                    <Profile handleOpenModal={onOpen} />
                </ButtonGroup>
                <AccountModal isOpen={isOpen} onClose={onClose} />
            </Flex>
        </Flex>
    </Flex>;
}