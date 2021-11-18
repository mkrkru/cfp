import { ButtonGroup, Flex, IconButton, Link, Tooltip } from '@chakra-ui/react';
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
            <Link href={"/"}><img alt="" style={{ width: "30px", height: "30px" }} src={Icon} /></Link>
            <Flex alignItems="center" justifyContent="center">
                <ButtonGroup variant="ghost">
                    <Link href="https://discord.com" isExternal>
                        <Tooltip hasArrow label="Discord" bg="#009eff" color="white">
                            <IconButton color={config.colors.blue} aria-label="Discord" icon={<FaDiscord fontSize="20px" />} />
                        </Tooltip>
                    </Link>
                    <Link href="https://twitter.com" isExternal>
                        <Tooltip hasArrow label="Twitter" bg="#009eff" color="white">
                            <IconButton color={config.colors.blue} aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
                        </Tooltip>
                    </Link>
                    <Link href="https://instagram.com" isExternal>
                        <Tooltip hasArrow label="Instagram" bg="#009eff" color="white">
                            <IconButton color={config.colors.blue} aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
                        </Tooltip>
                    </Link>
                    <Profile handleOpenModal={onOpen}/>
                </ButtonGroup>
                <AccountModal isOpen={isOpen} onClose={onClose}/>
            </Flex>
        </Flex>
    </Flex>;
}