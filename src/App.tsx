import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Link,
    ChakraProvider,
    Flex,
    useDisclosure
} from "@chakra-ui/react";
import Profile from "./components/Profile";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Title from "./components/Title";

export default function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    // @ts-ignore
    if (!window.ethereum) return <ChakraProvider>
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

    return <ChakraProvider>
        <Flex
            flexDirection="column"
            h="100vh"
            bg="gray.800"
        >
            <Nav>
                <Flex alignItems="center" justifyContent="center">
                    <Profile handleOpenModal={onOpen}/>
                    <AccountModal isOpen={isOpen} onClose={onClose}/>
                </Flex>
            </Nav>

            <Flex alignItems="center" justifyContent="center" marginTop="35vh"><Title /></Flex>
        </Flex>
        <div style={{ backgroundColor: "#48597A" }}><Footer/></div>
    </ChakraProvider>;
}