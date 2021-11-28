import { Button, Box, Text, useToast, Spinner } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { colors } from "../../../../config";
import Identicon from "./Identicon";
import Icon from "../../../../public/icon.png";

interface ProfileProps {
    handleOpenModal: any;
}

export default function Profile({ handleOpenModal }: ProfileProps) {
    const { activateBrowserWallet, account } = useEthers();
    const toast = useToast();
    const etherBalance = useEtherBalance(account);

    function handleConnectWallet() {
        // @ts-ignore
        window.ethereum
            ? activateBrowserWallet()
            : toast({
                position: "bottom-right",
                title: "Metamask not installed!",
                description: `To install Metamask extension close this message.`,
                status: "error",
                duration: 9000,
                isClosable: true,
                onCloseComplete: () => window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn", "_blkkas")
            });
    };

    return account ?
        <Box
            display="flex"
            alignItems="center"
            pl={3}
            pr={0.5}
            background={colors.medium}
            borderRadius="xl"
        >
            <Text mr={2} color={colors.lighter} fontSize="md">{etherBalance ? parseFloat(formatEther(etherBalance)).toFixed(3) + " ETH" : <Spinner color={colors.lighter} />}</Text>
            <Button
                onClick={handleOpenModal}
                bg={colors.dark}
                border="1px solid transparent"
                _hover={{
                    border: "1px",
                    borderStyle: "solid",
                    borderColor: colors.blue,
                    backgroundColor: colors.medium
                }}
                borderRadius="xl"
                height="38px"
            >
                <Text color={colors.lighter} fontSize="md" fontWeight="medium" mr="2">
                    {account &&
                    `${account.slice(0, 6)}...${account.slice(
                        account.length - 4,
                        account.length
                    )}`}
                </Text>
                <Identicon />
            </Button>
        </Box>
        : <Button
            onClick={handleConnectWallet}
            bg={colors.medium}
            color={colors.lighter}
            fontSize="lg"
            fontWeight="medium"
            borderRadius="xl"
            border="1px solid transparent"
            _hover={{
                borderColor: colors.blue,
                color: colors.blue
            }}
        >
            Login with Metamask <img alt="" style={{ marginLeft: "6px", width: "20px", height: "20px" }} src={Icon} />
        </Button>;
}
