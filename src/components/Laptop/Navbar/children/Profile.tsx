import { Button, Box, Text, useToast, Spinner, Tooltip } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";
import Icon from "../../../../public/metamask.png";
import { useState } from "react";

export default function Profile() {
    const { activateBrowserWallet, account } = useEthers();
    const toast = useToast();
    const etherBalance = useEtherBalance(account);
    const [ showCopiedTooltip, setShowCopiedTooltip ] = useState(false);

    function handleShowCopiedTooltip() {
        setShowCopiedTooltip(true);
        setTimeout(() => setShowCopiedTooltip(false), 1000);
    };

    function login() {
        activateBrowserWallet();
        window.location.reload();
    };

    function handleConnectWallet() {
        // @ts-ignore
        window.ethereum
            ? login()
            : toast({
                position: "bottom-right",
                title: "Metamask not installed!",
                description: ``,
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
            background="black"
            borderRadius="xl"
        >
            <Text ml={3} mr={2} color="white" fontSize="md">{etherBalance ? parseFloat(formatEther(etherBalance)).toFixed(3) + " ETH" : <Spinner color="white" />}</Text>
            <Tooltip isOpen={showCopiedTooltip} label="Copied!" bg="#aaaaaa">
                <Button
                    onClick={handleShowCopiedTooltip}
                    bg={"#383838"}
                    border="1px solid transparent"
                    borderRadius="xl"
                    _hover={{ backgroundColor: "#5d5d5d" }}
                >
                    <Text color="white" fontSize="md" fontWeight="medium" mr="2">
                        {account &&
                        `${account.slice(0, 6)}...${account.slice(
                            account.length - 4,
                            account.length
                        )}`}
                    </Text>
                    <Identicon />
                </Button>
            </Tooltip>
        </Box>
        : <Button
            onClick={handleConnectWallet}
            bg="black"
            color="white"
            fontSize="lg"
            fontWeight="medium"
            borderRadius="xl"
            border="1px solid transparent"
            _hover={{
                borderColor: "#808080",
                color: "#808080"
            }}
        >
            Login with Metamask <img alt="" style={{ marginLeft: "6px", width: "20px", height: "20px" }} src={Icon} />
        </Button>;
}
