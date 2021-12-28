import Marquee from "react-fast-marquee";
import { nfts } from "../../../config";

export function NftCarousel() {
    return <Marquee gradient={false} speed={110}>
        {nfts.map(x => <img
            style={{
                borderRadius: "8px",
                width: "650px",
                height: "650px",
                marginLeft: "20px",
                pointerEvents: "none"
            }}
            src={x}
            alt=""
        />)}
    </Marquee>;
}
