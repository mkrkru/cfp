import { Text, Box, Link, SimpleGrid } from "@chakra-ui/react";
import team1 from "../../../public/team1.png";
import team2 from "../../../public/team2.png";

const members = [
    {
        name: "Hudozhnik",
        img: team2,
        place: "hudozhnik",
        telegram: "mkrkru"
    },
    {
        name: "Makarka",
        img: team1,
        place: "developer",
        telegram: "mkrkru"
    },
    {
        name: "rab",
        img: team1,
        place: "tupa rab",
        telegram: "mkrkru"
    }
];

export const Team = () => {
    return <SimpleGrid columns={1} spacing={40}>
        {members.map((x: any) => <Box style={{
            borderRadius: "6px",
            boxShadow: "0px 10px 40px -20px #ffffff",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            maxWidth: "40vh",
            minHeight: "85vh"
        }}>
            <img style={{ borderRadius: "6px", pointerEvents: "none" }} src={x.img} alt="" />
            <Text color="white" textAlign="center" fontSize="80px">{x.name}</Text>
            <Text color="white" fontSize="40px" style={{ fontWeight: "bolder", position: "absolute", left: "6vh", bottom: "6vh" }}>{x.place}</Text>
            <Link to={`https://t.me/${x.telegram}`}><Text color="gray" fontSize="40px" _hover={{ cursor: "pointer", textDecoration: "underline" }} style={{ fontWeight: "bolder", position: "absolute", right: "6vh", bottom: "6vh" }}>@{x.telegram}</Text></Link>
        </Box>)}
    </SimpleGrid>;
};