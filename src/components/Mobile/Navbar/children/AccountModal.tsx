import {
    Box,
    Button,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Tooltip,
    Link
} from "@chakra-ui/react";
import { CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { useEthers } from "@usedapp/core";
import Identicon from "./Identicon";

import { useState } from "react";

interface AccountModalProps {
    isOpen: any;
    onClose: any;
};

export default function AccountModal({ isOpen, onClose }: AccountModalProps) {
    const [ showCopiedTooltip, setShowCopiedTooltip ] = useState(false);
    const { account, deactivate } = useEthers();
    const handleDisconnectWallet = () => {
        deactivate();
        onClose();
    }
    const handleShowCopiedTooltip = () => {
        setShowCopiedTooltip(true);
        setTimeout(() => setShowCopiedTooltip(false), 1000);
    };

    return <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
        <ModalOverlay />
        <ModalContent
            background="gray"
            border="1px"
            borderStyle="solid"
            borderColor="gray"
            borderRadius="3xl"
        >
            <ModalHeader color="white" px={4} fontSize="lg" fontWeight="medium">Account</ModalHeader>
            <ModalCloseButton
                color="white"
                fontSize="sm"
                _hover={{ color: "#808080" }}
            />
            <ModalBody pt={0} px={4}>
                <Box
                    borderRadius="3xl"
                    border="1px"
                    borderStyle="solid"
                    borderColor={"#808080"}
                    px={5}
                    pt={4}
                    pb={2}
                    mb={3}
                >
                    <Flex alignItems="center" justifyContent="space-between" mt={2} mb={4} lineHeight={1}>
                        <Flex>
                            <Identicon />
                            <Text
                                color="white"
                                fontSize="xl"
                                fontWeight="semibold"
                                ml="2"
                                lineHeight="1.1"
                            >
                                {account &&
                                `${account.slice(0, 6)}...${account.slice(
                                    account.length - 4,
                                    account.length
                                )}`}
                            </Text>
                        </Flex>
                        <Button
                            variant="outline"
                            borderColor="gray"
                            borderRadius="xl"
                            color="gray"
                            fontSize="16px"
                            fontWeight="normal"
                            height="34px"
                            _hover={{ borderColor: "gray" }}
                            onClick={handleDisconnectWallet}
                        >
                            Logout
                        </Button>
                    </Flex>
                    <Flex alignContent="center" m={3}>
                        <Button
                            variant="link"
                            color={"#808080"}
                            fontWeight="normal"
                            fontSize="sm"
                            _hover={{
                                textDecoration: "none",
                                color: "gray"
                            }}
                            onClick={handleShowCopiedTooltip}
                        >
                            <CopyIcon mr={1} />
                            <Tooltip hasArrow isOpen={showCopiedTooltip} label="Copied!" bg="gray">
                                Copy address
                            </Tooltip>
                        </Button>
                        <Link
                            fontSize="sm"
                            display="flex"
                            alignItems="center"
                            href={`https://ropsten.etherscan.io/address/${account}`}
                            isExternal
                            color={"#808080"}
                            ml={6}
                            _hover={{
                                textDecoration: "none",
                                color: "gray"
                            }}
                        >
                            <ExternalLinkIcon mr={1} />
                            View on Etherscan
                        </Link>
                    </Flex>
                </Box>
            </ModalBody>

            <ModalFooter
                justifyContent="end"
                background="gray"
                borderBottomLeftRadius="3xl"
                borderBottomRightRadius="3xl"
                p={6}
            >
                <Text color="gray">Crypto Frying Pans</Text>
            </ModalFooter>
        </ModalContent>
    </Modal>;
}