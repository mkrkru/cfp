import { ButtonGroup, Flex, IconButton, Link } from '@chakra-ui/react';
import Icon from "../../../public/icon.png";
import Profile from "./children/Profile";
import AccountModal from "./children/AccountModal";
// import { Mint } from "../";
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
                <ButtonGroup variant="ghost">
                    <Link href="https://discord.com/" isExternal>
                        <IconButton borderRadius="xl" color="white" bg="black" aria-label="Discord" icon={<FaDiscord fontSize="20px" />} />
                    </Link>
                    <Link href="https://twitter.com/CryptoPans" isExternal>
                        <IconButton borderRadius="xl" color="white" bg="black" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
                    </Link>
                    <Link href="https://instagram.com/" isExternal>
                        <IconButton borderRadius="xl" color="white" bg="black" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
                    </Link>
                    <Profile handleOpenModal={onOpen} />
                </ButtonGroup>
                <AccountModal isOpen={isOpen} onClose={onClose} />
            </Flex>
        </Flex>
    </Flex>;
}