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
    Tooltip
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { useEthers } from "@usedapp/core";
import Identicon from "./Identicon";
import config from "../../../../config";
import { useState } from "react";

interface AccountModalProps {
    isOpen: any;
    onClose: any;
};

export default function AccountModal({ isOpen, onClose }: AccountModalProps) {
    const [showCopiedTooltip, setShowCopiedTooltip] = useState(false);
    const { account, deactivate } = useEthers();
    const handleDisconnectWallet = () => deactivate();
    const handleShowCopiedTooltip = () => {
        setShowCopiedTooltip(true);
        setTimeout(() => setShowCopiedTooltip(false), 1000);
    };

    return <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
        <ModalOverlay />
        <ModalContent
            background={config.colors.darker}
            border="1px"
            borderStyle="solid"
            borderColor={config.colors.medium}
            borderRadius="3xl"
        >
            <ModalHeader color={config.colors.lighter} px={4} fontSize="lg" fontWeight="medium">
                Account
            </ModalHeader>
            <ModalCloseButton
                color={config.colors.lighter}
                fontSize="sm"
                _hover={{ color: config.colors.gray }}
            />
            <ModalBody pt={0} px={4}>
                <Box
                    borderRadius="3xl"
                    border="1px"
                    borderStyle="solid"
                    borderColor={config.colors.gray}
                    px={5}
                    pt={4}
                    pb={2}
                    mb={3}
                >
                    <Flex alignItems="center" justifyContent="space-between" mt={2} mb={4} lineHeight={1}>
                        <Flex>
                            <Identicon />
                            <Text
                                color={config.colors.lighter}
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
                            borderColor={config.colors.dark}
                            borderRadius="xl"
                            color={config.colors.blue}
                            fontSize="16px"
                            fontWeight="normal"
                            height="34px"
                            _hover={{ borderColor: config.colors.blue }}
                            onClick={handleDisconnectWallet}
                        >
                            Logout
                        </Button>
                    </Flex>
                    <Flex alignContent="center" m={3}>
                        <Button
                            variant="link"
                            color={config.colors.gray}
                            fontWeight="normal"
                            fontSize="sm"
                            _hover={{
                                textDecoration: "none",
                                color: config.colors.lighter
                            }}
                            onClick={handleShowCopiedTooltip}
                        >
                            <CopyIcon mr={1} />
                            <Tooltip hasArrow isOpen={showCopiedTooltip} label="Copied!" bg={config.colors.light}>
                                Copy address
                            </Tooltip>
                        </Button>
                    </Flex>
                </Box>
            </ModalBody>

            <ModalFooter
                justifyContent="end"
                background={config.colors.medium}
                borderBottomLeftRadius="3xl"
                borderBottomRightRadius="3xl"
                p={6}
            >
                <Text color="gray">Crypto Frying Pans</Text>
            </ModalFooter>
        </ModalContent>
    </Modal>;
}
