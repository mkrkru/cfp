import { Text, Box, Link, SimpleGrid } from "@chakra-ui/react";
import team1 from "../../../public/team1.png";
import team2 from "../../../public/team2.png";
import team3 from "../../../public/team3.png";

const members1 = [
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

const members2 = [
    {
        name: "man1",
        img: team3,
        place: "manager",
        telegram: "mkrkru"
    },
    {
        name: "man2",
        img: team3,
        place: "manager",
        telegram: "mkrkru"
    }
];

export const Team = () => {
    return <>
        <SimpleGrid columns={3} spacing={14}>
            {members1.map((x: any) => <Box style={{
                padding: "10vh",
                borderRadius: "6px",
                boxShadow: "0px 30px 40px -20px #aaaaaa",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                maxWidth: "50vh"
            }}>
                <img style={{ borderRadius: "6px", pointerEvents: "none" }} src={x.img} alt="" />
                <Text color="white" textAlign="center" fontSize="30px" my="2vh">{x.name}</Text>
                <Text color="white" style={{ fontWeight: "bolder", position: "absolute", left: "6vh", bottom: "6vh" }}>{x.place}</Text>
                <Link href={`https://t.me/${x.telegram}`}><Text color="gray" _hover={{ cursor: "pointer", textDecoration: "underline" }} style={{ fontWeight: "bolder", position: "absolute", right: "6vh", bottom: "6vh" }}>@{x.telegram}</Text></Link>
            </Box>)}
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={14}>
            {members2.map((x: any) => <Box style={{
                padding: "10vh",
                borderRadius: "6px",
                boxShadow: "0px 30px 40px -20px #aaaaaa",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                maxWidth: "50vh"
            }}>
                <img style={{ borderRadius: "6px", pointerEvents: "none" }} src={x.img} alt="" />
                <Text color="white" textAlign="center" fontSize="30px" my="2vh">{x.name}</Text>
                <Text color="white" style={{ fontWeight: "bolder", position: "absolute", left: "6vh", bottom: "6vh" }}>{x.place}</Text>
                <Link href={`https://t.me/${x.telegram}`}><Text color="gray" _hover={{ cursor: "pointer", textDecoration: "underline" }} style={{ fontWeight: "bolder", position: "absolute", right: "6vh", bottom: "6vh" }}>@{x.telegram}</Text></Link>
            </Box>)}
        </SimpleGrid>
    </>;
};