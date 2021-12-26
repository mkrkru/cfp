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
                position: "bottom",
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
            style={{ transform: "scale(2.5)" }}
            borderRadius="xl"
            color="white"
            _hover={{ color: "#808080" }}
        >
            <Text ml={3} mr={2} color="white" fontSize="md">{etherBalance ? parseFloat(formatEther(etherBalance)).toFixed(2) + " ETH" : <Spinner color="white" />}</Text>
            <Tooltip isOpen={showCopiedTooltip} label="Address copied!" bg="#aaaaaa" transform="scale(2.5)">
                <Button
                    onClick={handleShowCopiedTooltip}
                    bg={"#383838"}
                    borderRadius="xl"
                    color="white"
                    _hover={{ color: "#808080" }}
                >
                    <Identicon />
                </Button>
            </Tooltip>
        </Box>
        : <Button
            onClick={handleConnectWallet}
            style={{ transform: "scale(2.5)" }}
            borderRadius="xl"
            color="white"
            bg="black"
            _hover={{ color: "#808080" }}
        >
            Login <img alt="" style={{ marginLeft: "6px", width: "20px", height: "20px" }} src={Icon} />
        </Button>;
}
