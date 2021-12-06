import { ButtonGroup, Flex, IconButton, Link } from '@chakra-ui/react';
import Icon from "../../../public/icon.png";
import Profile from "./children/Profile";
import AccountModal from "./children/AccountModal";
import { Mint } from "../";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { colors } from "../../../config";

interface NavbarProps {
    isOpen: any;
    onOpen: any;
    onClose: any;
};

function hexToRGB(hex: string, alpha: number) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function Navbar({ isOpen, onOpen, onClose }: NavbarProps) {
    return <Flex flexDirection="column" pl={20} pr={4} style={{ position: "fixed", width: "100%", zIndex: 1000, background: hexToRGB(colors.darker, 0.9) }}>
        <Flex alignItems="center" justifyContent="space-between" h={16}>
            <Link href={"/"}><img alt="" style={{ width: "40px", height: "40px" }} src={Icon} /></Link>
            {/*<Mint />*/}
            <Flex alignItems="center" justifyContent="center">
                <ButtonGroup variant="ghost">
                    <Link href="https://discord.com/" isExternal>
                        <IconButton color={colors.blue} aria-label="Discord" icon={<FaDiscord fontSize="20px" />} />
                    </Link>
                    <Link href="https://twitter.com/CryptoPans" isExternal>
                        <IconButton color={colors.blue} aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
                    </Link>
                    <Link href="https://instagram.com/" isExternal>
                        <IconButton color={colors.blue} aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
                    </Link>
                    <Profile handleOpenModal={onOpen} />
                </ButtonGroup>
                <AccountModal isOpen={isOpen} onClose={onClose} />
            </Flex>
        </Flex>
    </Flex>;
}