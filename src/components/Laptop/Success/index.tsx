import { ChakraProvider, extendTheme, VStack, Link, Text, Image } from "@chakra-ui/react";
import { Footer } from "..";
import "@fontsource/abeezee";
import icon from "../../../public/icon.png";
import "./style.css";
import { useEffect } from "react";

interface SuccessProps {
    hash: string;
}

export function Success({ hash }: SuccessProps) {
    useEffect(() => {
        setTimeout(() => window.location.reload(), 10000);
    }, []);

    return <ChakraProvider theme={extendTheme({ fonts: { heading: "ABeeZee", body: "ABeeZee" } })}>
        <VStack spacing="7vh" pb="10vh" bg={"#000000"} justify="center">
            <Image className="toRotate" src={icon} />
            <Text color="white" fontSize="40px" fontWeight="bolder">Transaction started...</Text>
            <Text color="white" fontSize="20px" fontWeight="bolder">You can check current transaction status on <Link href={`https://etherscan.io/tx/${hash}`} color="gray">Etherscan ({hash})</Link></Text>
            <Text color="white" fontSize="20px" fontWeight="bolder">Verified Contract Address <Link href="https://etherscan.io/address/0xF48549f4969565b6c87788D6312EF648Db864e89" color="green">0xF48549f4969565b6c87788D6312EF648Db864e89</Link></Text>
            <Text color="white" fontSize="16px" fontWeight="bolder">You will be redirected to the main page in 10 seconds...</Text>
        </VStack>

        <Footer />
    </ChakraProvider>;
}