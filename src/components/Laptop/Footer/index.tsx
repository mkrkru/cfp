import { Box, Stack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import Icon from "../../../public/icon.png";

export function Footer() {
    return <Box as="footer" bg="#48597A" py={10} px="20vh">
            <Stack>
                <Stack direction="row" spacing="4" align="center" justify="space-between">
                    <img alt="" src={Icon} style={{ width: "30px", height: "30px" }} />
                </Stack>
                <Text alignSelf={{ base: 'center', sm: 'start' }} color="#9DD1F1" fontSize="sm">
                    &copy; {new Date().getFullYear()} Crypto Frying Pans
                </Text>
            </Stack>
        </Box>;
}