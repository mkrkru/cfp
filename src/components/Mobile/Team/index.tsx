import { Heading, Text, Box, VStack, Link, SimpleGrid } from "@chakra-ui/react";
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

const Team_Horizontal_WithDesc = () => {
    return <VStack my="14vh" justify="center" spacing={16} w='700px'>
        {members.map((x: any) => <Box style={{
            padding: "6vh 2vh",
            borderRadius: "6px",
            boxShadow: "0px 30px 40px -20px #aaaaaa",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative"
        }}>
            <Text color="white" style={{ fontWeight: "bolder", position: "absolute", right: "6vh", top: "8vh" }}>{x.place}</Text>
            <Link to={x.link}><Text color="gray" _hover={{ cursor: "pointer", textDecoration: "underline" }} style={{ fontWeight: "bolder", position: "absolute", right: "6vh", bottom: "6vh" }}>{x.link}</Text></Link>
            <img style={{ borderRadius: "6px", pointerEvents: "none", width: "30%" }} src={x.img} alt="" />
            <Heading color="white" as="h3">{x.name}</Heading>
            <Text mx="5vh" minW="30vh" color="white" fontSize="2xl">{x.desc}</Text>
        </Box>)}
    </VStack>;
};

const Team_Horizontal_NoDesc = () => {
    return <SimpleGrid columns={3} spacing={10}>
        {members.map((x: any) => <Box style={{
            padding: "6vh",
            borderRadius: "6px",
            boxShadow: "0px 30px 40px -20px #aaaaaa",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative"
        }}>
            <img style={{ borderRadius: "6px", pointerEvents: "none", width: "30%" }} src={x.img} alt="" />
            <Heading color="white" as="h3">{x.name}</Heading>
            <Text color="white" style={{ fontWeight: "bolder", position: "absolute", right: "6vh", top: "8vh" }}>{x.place}</Text>
            <Link to={x.link}><Text color="gray" _hover={{ cursor: "pointer", textDecoration: "underline" }} style={{ fontWeight: "bolder", position: "absolute", right: "6vh", bottom: "6vh" }}>{x.link}</Text></Link>
            <Box width="4vh"></Box>
        </Box>)}
    </SimpleGrid>;
};

export const Team = () => {
    return <SimpleGrid columns={1} spacing={10}>
        {members.map((x: any) => <Box style={{
            borderRadius: "6px",
            boxShadow: "0px 30px 40px -20px #aaaaaa",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            maxWidth: "40vh",
            minHeight: "85vh"
        }}>
            <img style={{ borderRadius: "6px", pointerEvents: "none", transform: "scale(1)" }} src={x.img} alt="" />
            <Text color="white" textAlign="center" fontSize="80px">{x.name}</Text>
            <Text color="white" fontSize="40px" style={{ fontWeight: "bolder", position: "absolute", left: "6vh", bottom: "6vh" }}>{x.place}</Text>
            <Link to={`https://t.me/${x.telegram}`}><Text color="gray" fontSize="40px" _hover={{ cursor: "pointer", textDecoration: "underline" }} style={{ fontWeight: "bolder", position: "absolute", right: "6vh", bottom: "6vh" }}>@{x.telegram}</Text></Link>
        </Box>)}
    </SimpleGrid>;
};