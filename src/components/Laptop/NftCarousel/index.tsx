import { Carousel } from 'react-responsive-carousel';
import Nft1 from "../../../public/nft1.png";
import Nft2 from "../../../public/nft2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [Nft1, Nft2];

export function NftCarousel() {
    return <Carousel autoPlay={true} stopOnHover={true} interval={6000} transitionTime={500} infiniteLoop={true} showThumbs={false}>
        {images.map(x => <div><img src={x} alt="" style={{ width: "300px", height: "300px", borderRadius: "4px" }} /></div>)}
    </Carousel>;
}
