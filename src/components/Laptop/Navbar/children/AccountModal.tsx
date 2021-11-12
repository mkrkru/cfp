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
    Text
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { useEthers } from "@usedapp/core";
import Identicon from "./Identicon";

interface AccountModalProps {
    isOpen: any;
    onClose: any;
};

export default function AccountModal({ isOpen, onClose }: AccountModalProps) {
    const { account } = useEthers();

    return <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
        <ModalOverlay/>
        <ModalContent
            background="gray.900"
            border="1px"
            borderStyle="solid"
            borderColor="gray.700"
            borderRadius="3xl"
        >
            <ModalHeader color="white" px={4} fontSize="lg" fontWeight="medium">
                Аккаунт
            </ModalHeader>
            <ModalCloseButton
                color="white"
                fontSize="sm"
                _hover={{color: "whiteAlpha.700"}}
            />
            <ModalBody pt={0} px={4}>
                <Box
                    borderRadius="3xl"
                    border="1px"
                    borderStyle="solid"
                    borderColor="gray.600"
                    px={5}
                    pt={4}
                    pb={2}
                    mb={3}
                >
                    <Flex alignItems="center" mt={2} mb={4} lineHeight={1}>
                        <Identicon/>
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
                    <Flex alignContent="center" m={3}>
                        <Button
                            variant="link"
                            color="gray.400"
                            fontWeight="normal"
                            fontSize="sm"
                            _hover={{
                                textDecoration: "none",
                                color: "whiteAlpha.800",
                            }}
                        >
                            <CopyIcon mr={1}/>
                            Скопировать адрес
                        </Button>
                    </Flex>
                </Box>
            </ModalBody>

            <ModalFooter
                justifyContent="end"
                background="gray.700"
                borderBottomLeftRadius="3xl"
                borderBottomRightRadius="3xl"
                p={6}
            >
                <Text color="gray">Crypto Frying Pans</Text>
            </ModalFooter>
        </ModalContent>
    </Modal>;
}
