import { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

interface NavProps {
    children?: ReactNode;
};

// eslint-disable-next-line
export default ({ children }: NavProps) => <Box bg='gray.900' px={4}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box></Box>
        {children}
    </Flex>
</Box>;