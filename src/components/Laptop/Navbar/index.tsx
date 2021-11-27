import { ButtonGroup, Flex, IconButton, Link } from '@chakra-ui/react';
import Icon from "../../../public/icon.png";
import Profile from "./children/Profile";
import AccountModal from "./children/AccountModal";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import config from "../../../config";

interface NavbarProps {
    isOpen: any;
    onOpen: any;
    onClose: any;
};

export function Navbar({ isOpen, onOpen, onClose }: NavbarProps) {
    return <Flex flexDirection="column" bg={config.colors.darker} pl={20} pr={4}>
        <Flex alignItems="center" justifyContent="space-between" h={16}>
            <Link href={"/"}><img alt="" style={{ width: "40px", height: "40px" }} src={Icon} /></Link>
            <Flex alignItems="center" justifyContent="center">
                <ButtonGroup variant="ghost">
                    <Link href="https://discord.com" isExternal>
                        <IconButton color={config.colors.blue} aria-label="Discord" icon={<FaDiscord fontSize="20px" />} />
                    </Link>
                    <Link href="https://twitter.com/cryptopans" isExternal>
                        <IconButton color={config.colors.blue} aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
                    </Link>
                    <Link href="https://instagram.com" isExternal>
                        <IconButton color={config.colors.blue} aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
                    </Link>
                    <Profile handleOpenModal={onOpen} />
                </ButtonGroup>
                <AccountModal isOpen={isOpen} onClose={onClose} />
            </Flex>
        </Flex>
    </Flex>;
}