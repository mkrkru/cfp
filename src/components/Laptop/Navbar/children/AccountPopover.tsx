import {
    Box,
    Button,
    Flex,
    Popover,
    PopoverContent,
    Text,
    Tooltip,
    Link
} from "@chakra-ui/react";
import { CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { useEthers } from "@usedapp/core";
import Identicon from "./Identicon";
import { colors } from "../../../../config";
import { useState } from "react";

interface AccountPopoverProps {
    isOpen: any;
    onClose: any;
};

export default function AccountPopover({ isOpen, onClose }: AccountPopoverProps) {
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

    return <Popover isOpen={isOpen} onClose={onClose} size="md">
        <PopoverContent>
            <Box
                bg={colors.darker}
                    borderRadius="3xl"
                    border="1px"
                    borderStyle="solid"
                    borderColor={colors.gray}
                    px={5}
                    pt={4}
                    pb={2}
                    mb={3}
                >
                    <Flex alignItems="center" justifyContent="space-between" mt={2} mb={4} lineHeight={1}>
                        <Flex>
                            <Identicon />
                            <Text
                                color={colors.lighter}
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
                            borderColor={colors.dark}
                            borderRadius="xl"
                            color={colors.blue}
                            fontSize="16px"
                            fontWeight="normal"
                            height="34px"
                            _hover={{ borderColor: colors.blue }}
                            onClick={handleDisconnectWallet}
                        >
                            Logout
                        </Button>
                    </Flex>
                    <Flex alignContent="center" m={3}>
                        <Button
                            variant="link"
                            color={colors.gray}
                            fontWeight="normal"
                            fontSize="sm"
                            _hover={{
                                textDecoration: "none",
                                color: colors.lighter
                            }}
                            onClick={handleShowCopiedTooltip}
                        >
                            <CopyIcon mr={1} />
                            <Tooltip hasArrow isOpen={showCopiedTooltip} label="Copied!" bg={colors.light}>
                                Copy address
                            </Tooltip>
                        </Button>
                        <Link
                            fontSize="sm"
                            display="flex"
                            alignItems="center"
                            href={`https://ropsten.etherscan.io/address/${account}`}
                            isExternal
                            color={colors.gray}
                            ml={6}
                            _hover={{
                                textDecoration: "none",
                                color: colors.lighter
                            }}
                        >
                            <ExternalLinkIcon mr={1} />
                            View on Etherscan
                        </Link>
                    </Flex>
                </Box>
        </PopoverContent>
    </Popover>;
}