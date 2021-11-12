import { ButtonGroup, Flex, IconButton, Link } from '@chakra-ui/react';
import Icon from "../../../public/icon.png";
import Profile from "./children/Profile";
import AccountModal from "./children/AccountModal";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

interface NavbarProps {
    isOpen: any;
    onOpen: any;
    onClose: any;
};

export function Navbar({ isOpen, onOpen, onClose }: NavbarProps) {
    return <Flex flexDirection="column" bg='gray.900' px={4}>
        <Flex alignItems="center" justifyContent="space-between" h="10vh">
            <Link href={"/"}><img alt="" style={{ width: "80px", height: "80px" }} src={Icon} /></Link>
            <Flex alignItems="center" justifyContent="center">
                <ButtonGroup variant="ghost" color="gray.600">
                    <Link href="https://discord.com" isExternal><IconButton color="#9DD1F1" aria-label="Discord" icon={<FaDiscord fontSize="30px" />} /></Link>
                    <Link href="https://twitter.com" isExternal><IconButton color="#9DD1F1" aria-label="Twitter" icon={<FaTwitter fontSize="30px" />} /></Link>
                    <Link href="https://instagram.com" isExternal><IconButton color="#9DD1F1" aria-label="Instagram" icon={<FaInstagram fontSize="30px" />} /></Link>
                    <Profile handleOpenModal={onOpen}/>
                </ButtonGroup>
                <AccountModal isOpen={isOpen} onClose={onClose}/>
            </Flex>
        </Flex>
    </Flex>;
}