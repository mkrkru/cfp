import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Link,
    ChakraProvider,
    Flex,
    extendTheme,
    useDisclosure
} from "@chakra-ui/react";
import Profile from "./components/Profile";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Nav from "./components/Nav";

const theme = extendTheme({
    fonts: {
        heading: "Inter",
        body: "Inter"
    }
});

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    // @ts-ignore
    const final = window.ethereum
        ? <Flex
            flexDirection="column"
            h="100vh"
            bg="gray.800"
        >
            <Nav>
                <Flex alignItems="center" justifyContent="center">
                    <Profile handleOpenModal={onOpen} />
                    <AccountModal isOpen={isOpen} onClose={onClose} />
                </Flex>
            </Nav>
        </Flex>
        : <Flex
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
        </Flex>;

    return <ChakraProvider theme={theme}>{final}</ChakraProvider>;
}

export default App;
