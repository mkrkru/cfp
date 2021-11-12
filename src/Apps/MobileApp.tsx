import { useDisclosure, ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "../components/Mobile";

export default function MobileApp() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    // @ts-ignore
    // if (!window.ethereum) return <NoWallet />;

    return <ChakraProvider>
        <Navbar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </ChakraProvider>;
}