import { Box, Stack, ButtonGroup, IconButton, Link } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import { FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';
import Icon from "../../public/icon.png";

export function Footer() {
    return <div style={{ backgroundColor: "#48597A" }}>
        <Box as="footer" bg="#48597A" role="contentinfo" mx="auto" maxW="7xl" py="10" px={{ base: '4', md: '8' }}>
            <Stack>
                <Stack direction="row" spacing="4" align="center" justify="space-between">
                    <img alt="" src={Icon} style={{ width: "30px", height: "30px" }} />
                    <ButtonGroup variant="ghost" color="gray.600">
                        <Link href="https://discord.com" isExternal><IconButton color="white" aria-label="Discord" icon={<FaDiscord fontSize="20px" />} /></Link>
                        <Link href="https://twitter.com" isExternal><IconButton color="white" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} /></Link>
                        <Link href="https://instagram.com" isExternal><IconButton color="white" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} /></Link>
                    </ButtonGroup>
                </Stack>
                <Text alignSelf={{ base: 'center', sm: 'start' }} color="white" fontSize="sm">
                    &copy; {new Date().getFullYear()} Crypto Frying Pans
                </Text>
            </Stack>
        </Box>
    </div>;
}