import { Text, Box, Link, SimpleGrid } from "@chakra-ui/react";
import { members } from "../../../config";

export const Team = () => {
    return <>
        <SimpleGrid columns={3} spacing={14}>
            {members.map((x: any) => <Box style={{
                padding: "10vh",
                borderRadius: "6px",
                boxShadow: "0px 30px 40px -20px #aaaaaa",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                maxWidth: "26vw"
            }}>
                <img style={{ borderRadius: "6px", pointerEvents: "none" }} src={x.img} alt="" />
                <Text color="white" textAlign="center" fontSize="34px" my="2vh" fontWeight="bold">{x.name}</Text>
                <Text color="white" style={{ fontWeight: "bolder", position: "absolute", left: "2vw", bottom: "5vh", fontSize: "18px" }}>{x.place}</Text>
                <Link href={`https://t.me/${x.telegram}`}><Text color="gray" _hover={{ cursor: "pointer", textDecoration: "underline" }} style={{ fontSize: "18px", fontWeight: "bolder", position: "absolute", right: "2vw", bottom: "5vh" }}>@{x.telegram}</Text></Link>
            </Box>)}
        </SimpleGrid>
    </>;
};