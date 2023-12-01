import {Box, Flex, HStack, Image, Link} from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import Icon from "../../../public/icon.png";

export function Footer() {
    return <Box py={10} bg="black">
        <Flex
            align={'center'}
            _before={{
                content: '""',
                borderBottom: '1px solid',
                borderColor: "white",
                flexGrow: 1,
                mr: 8
            }}
            _after={{
                content: '""',
                borderBottom: '1px solid',
                borderColor: "white",
                flexGrow: 1,
                ml: 8
            }}>
            <img alt="" src={Icon} style={{ width: "60px", height: "60px" }} />
        </Flex>
        <HStack justify="space-evenly">
            <Text pt={6} fontSize='sm' textAlign='center' color="white">
                &copy; {new Date().getFullYear()} Crypto Frying Pans <Link color="gray" href="mailto:feedback@cryptofryingpans.com">feedback@cryptofryingpans.com</Link>
            </Text>
            <HStack>
                <Text color="white">Developed by</Text>
                <Image src="/twodev.png" borderRadius="full" w="50px" />
            </HStack>
        </HStack>
    </Box>
}