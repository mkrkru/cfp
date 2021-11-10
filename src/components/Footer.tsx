import {Box, Stack, ButtonGroup, IconButton, Link} from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import Icon from "../icon.png";

export default function Footer() {
    return <Box as="footer" bg="#48597A" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
        <Stack>
            <Stack direction="row" spacing="4" align="center" justify="space-between">
                <img alt="" src={Icon} style={{ width: "30px", height: "30px" }} />
                <ButtonGroup variant="ghost" color="gray.600">
                    <Link href="https://discord.com" isExternal><IconButton color="white" aria-label="Discord" icon={<FaDiscord fontSize="20px" />} /></Link>
                    <Link href="https://twitter.com" isExternal><IconButton color="white" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} /></Link>
                </ButtonGroup>
            </Stack>
            <Text alignSelf={{ base: 'center', sm: 'start' }} color="white" fontSize="sm">
                &copy; {new Date().getFullYear()} Envelope, Inc. All rights reserved.
            </Text>
        </Stack>
    </Box>;
}