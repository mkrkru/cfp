import { Text, Box, Link, SimpleGrid } from "@chakra-ui/react";
import { members } from "../../../config";

export const Team = () => {
    return <SimpleGrid columns={1} spacing={40}>
        {members.map((x: any) => <Box style={{
            borderRadius: "6px",
            boxShadow: "0px 30px 40px -20px #aaaaaa",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            maxWidth: "84vw",
            minHeight: "76vh"
        }}>
            <img style={{ borderRadius: "6px", pointerEvents: "none", margin: "-4vh 0 2vh 0" }} src={x.img} alt="" />
            <Text color="white" textAlign="center" fontSize="80px" fontWeight="bold">{x.name}</Text>
            <Text color="white" fontSize="40px" style={{ fontWeight: "bolder", position: "absolute", left: "4vw", bottom: "3vh" }}>{x.place}</Text>
            <Link href={`https://t.me/${x.telegram}`}><Text color="gray" fontSize="40px" _hover={{ cursor: "pointer", textDecoration: "underline" }} style={{ fontWeight: "bolder", position: "absolute", right: "4vw", bottom: "3vh" }}>@{x.telegram}</Text></Link>
        </Box>)}
    </SimpleGrid>;
};