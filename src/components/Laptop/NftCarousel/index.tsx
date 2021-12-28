import Marquee from "react-fast-marquee";
import { nfts } from "../../../config";

export function NftCarousel() {
    return <Marquee gradient={false} speed={50}>
        {nfts.map(x => <img
            style={{
                borderRadius: "8px",
                width: "300px",
                height: "300px",
                marginLeft: "20px",
                transition: "all .2s ease-in-out",
                pointerEvents: "none"
            }}
            src={x}
            alt=""
        />)}
    </Marquee>;
}
