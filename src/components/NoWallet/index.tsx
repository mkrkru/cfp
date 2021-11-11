import { Alert, AlertDescription, AlertIcon, AlertTitle, ChakraProvider, Flex, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export function NoWallet() {
    return <ChakraProvider>
        <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            h="100vh"
            bg="gray.800"
        >
            <Alert
                status="warning"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px"
                width="300px"
                borderRadius="4px"
            >
                <AlertIcon/>
                <AlertTitle mr={2}>MetaMask не найден!</AlertTitle>
                <AlertDescription><Link
                    href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                    isExternal>Установить <ExternalLinkIcon mx="2px"/></Link>
                </AlertDescription>
            </Alert>
        </Flex>
    </ChakraProvider>;
}