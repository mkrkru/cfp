import { Box, Stack, ButtonGroup, IconButton } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return <Box as="footer" bg="#48597A" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
        <Stack>
            <Stack direction="row" spacing="4" align="center" justify="space-between">
                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png" style={{ width: "30px", height: "30px" }} />
                <ButtonGroup variant="ghost" color="gray.600">
                    <IconButton as="a" color="white" href="https://discord.com" aria-label="Discord" icon={<FaDiscord fontSize="20px" />} />
                    <IconButton as="a" color="white" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
                </ButtonGroup>
            </Stack>
            <Text alignSelf={{ base: 'center', sm: 'start' }} color="white" fontSize="sm">
                &copy; {new Date().getFullYear()} Envelope, Inc. All rights reserved.
            </Text>
        </Stack>
    </Box>;
}