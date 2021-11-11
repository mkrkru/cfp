import { Flex, Link } from '@chakra-ui/react';
import Icon from "../../public/icon.png";
import Profile from "./children/Profile";
import AccountModal from "./children/AccountModal";

interface NavbarProps {
    isOpen: any;
    onOpen: any;
    onClose: any;
};

export function Navbar({ isOpen, onOpen, onClose }: NavbarProps) {
    return <Flex flexDirection="column" bg='gray.900' px={4}>
            <Flex alignItems="center" justifyContent="space-between" h={16}>
                <Link href={"/"}><img alt="" style={{ width: "30px", height: "30px" }} src={Icon} /></Link>
                <Flex alignItems="center" justifyContent="center">
                    <Profile handleOpenModal={onOpen}/>
                    <AccountModal isOpen={isOpen} onClose={onClose}/>
                </Flex>
            </Flex>
    </Flex>
}