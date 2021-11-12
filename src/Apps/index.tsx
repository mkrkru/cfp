import LaptopApp from "./LaptopApp";
/* import { useMediaQuery } from "@chakra-ui/react";
import MobileApp from "./MobileApp";

export default function App() {
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

    return isLargerThan1280
        ? <LaptopApp />
        : <MobileApp />;
} */

export default function App() {
    return <LaptopApp />;
}