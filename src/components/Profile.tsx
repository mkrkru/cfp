import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";

interface ProfileProps {
    handleOpenModal: any;
};

export default function Profile({handleOpenModal}: ProfileProps) {
    const { activateBrowserWallet, account, deactivate } = useEthers();
    const etherBalance = useEtherBalance(account);

    const handleDisconnectWallet = () => deactivate();
    const handleConnectWallet = () => activateBrowserWallet();

    return account ?
        <Box
            display="flex"
            alignItems="center"
            background="gray.700"
            borderRadius="xl"
            py="0"
        >
            <Box px="3">
                <Text color="white" fontSize="md">
                    {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
                </Text>
            </Box>
            <Button
                onClick={handleOpenModal}
                bg="gray.800"
                border="1px solid transparent"
                _hover={{
                    border: "1px",
                    borderStyle: "solid",
                    borderColor: "blue.400",
                    backgroundColor: "gray.700",
                }}
                borderRadius="xl"
                m="1px"
                px={3}
                height="38px"
            >
                <Text color="white" fontSize="md" fontWeight="medium" mr="2">
                    {account &&
                    `${account.slice(0, 6)}...${account.slice(
                        account.length - 4,
                        account.length
                    )}`}
                </Text>
                <Identicon/>
            </Button>
            <Button
                marginLeft="10px"
                variant="outline"
                borderColor="blue.800"
                borderRadius="xl"
                color="blue.500"
                fontSize="16px"
                fontWeight="normal"
                px={5}
                height="34px"
                _hover={{
                    background: "none",
                    borderColor: "blue.300",
                    textDecoration: "none"
                }}
                onClick={handleDisconnectWallet}
            >
                Выйти
            </Button>
        </Box>
        : <Button
            onClick={handleConnectWallet}
            bg="blue.800"
            color="blue.300"
            fontSize="lg"
            fontWeight="medium"
            borderRadius="xl"
            border="1px solid transparent"
            _hover={{
                borderColor: "blue.700",
                color: "blue.400",
            }}
            _active={{
                backgroundColor: "blue.800",
                borderColor: "blue.700",
            }}
        >
            Войти
        </Button>;
}
