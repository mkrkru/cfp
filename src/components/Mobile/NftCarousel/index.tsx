import Nft1 from "../../../public/nft1.png";
import Nft2 from "../../../public/nft2.png";
import Nft3 from "../../../public/nft3.png";
import Nft4 from "../../../public/nft4.png";
import Nft5 from "../../../public/nft5.png";
import Nft6 from "../../../public/nft6.png";
import Nft7 from "../../../public/nft7.png";
import Nft8 from "../../../public/nft8.png";
import Marquee from "react-fast-marquee";
import { Image } from "@chakra-ui/react";

export function NftCarousel() {
    const images = [Nft1, Nft2, Nft3, Nft4, Nft5, Nft6, Nft7, Nft8];
    return <Marquee gradient={false} speed={100}>
        {images.map(x => <Image
            style={{
                borderRadius: "8px",
                width: "650px",
                height: "650px",
                marginLeft: "20px"
            }}
            src={x}
            alt=""
        />)}
    </Marquee>;
}
