import { ReactNode } from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import Icon from "../icon.png";

interface NavProps {
    children?: ReactNode;
};

export default function Nav({ children }: NavProps) {
    return <Box bg='gray.900' px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
            <Link href={"/"}><img alt="" style={{ width: "30px", height: "30px" }} src={Icon} /></Link>
            {children}
        </Flex>
    </Box>;
}