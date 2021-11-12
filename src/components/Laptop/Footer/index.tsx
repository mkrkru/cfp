import { Box, Stack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import Icon from "../../../public/icon.png";

export function Footer() {
    return <div style={{ backgroundColor: "#48597A" }}>
        <Box as="footer" bg="#48597A" role="contentinfo" mx="auto" maxW="7xl" py="10" px={{ base: '4', md: '8' }}>
            <Stack>
                <Stack direction="row" spacing="4" align="center" justify="space-between">
                    <img alt="" src={Icon} style={{ width: "30px", height: "30px" }} />

                </Stack>
                <Text alignSelf={{ base: 'center', sm: 'start' }} color="white" fontSize="sm">
                    &copy; {new Date().getFullYear()} Crypto Frying Pans
                </Text>
            </Stack>
        </Box>
    </div>;
}