import { Box, Flex } from '@chakra-ui/react';
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
            <img alt="" src={Icon} style={{ width: "150px", height: "150px" }} />
        </Flex>
        <Text pt={6} fontSize='40px' textAlign='center' color="white">
            &copy; {new Date().getFullYear()} Crypto Frying Pans
        </Text>
    </Box>
}