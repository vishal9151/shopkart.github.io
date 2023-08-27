import { Products } from "../productsShow";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from "./productCard";

export default function ShowProduct({categor}){
    const productArr=Products.filter((element)=>element.category==categor);
    console.log(productArr);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <Carousel responsive={responsive}>
            {productArr.map((ele)=><ProductCard product={ele}/>)}
        </Carousel>
    )
}