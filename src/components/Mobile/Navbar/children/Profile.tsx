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
    const handleShowCopiedTooltip = () => {
        setShowCopiedTooltip(true);
        setTimeout(() => setShowCopiedTooltip(false), 1000);
    };

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
            background="black"
            borderRadius="xl"
        >
            <Text mr={2} color="white" fontSize="md">{etherBalance ? parseFloat(formatEther(etherBalance)).toFixed(3) + " ETH" : <Spinner color="white" />}</Text>
            <Tooltip isOpen={showCopiedTooltip} label="Copied!" bg="gray">
                <Button
                    onClick={handleShowCopiedTooltip}
                    bg="gray"
                    border="1px solid transparent"
                    _hover={{
                        border: "1px",
                        borderStyle: "solid",
                        borderColor: "gray",
                        backgroundColor: "gray"
                    }}
                    borderRadius="xl"
                    height="38px"
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
            bg="gray"
            color="white"
            fontSize="lg"
            fontWeight="medium"
            borderRadius="xl"
            border="1px solid transparent"
            _hover={{
                color: "black",
                bg: "white"
            }}
        >
            Login <img alt="" style={{ marginLeft: "6px", width: "20px", height: "20px" }} src={Icon} />
        </Button>;
}
