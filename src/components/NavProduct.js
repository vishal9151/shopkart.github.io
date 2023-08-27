import { useState } from "react";
import Product from "./Product";


export default function NavProduct({ product}) {
    const [dropdown,setDropdown]=useState("false");
    
    const buttonHandle=()=>{
        setDropdown(!dropdown);
    }
    return (
      <>
        {product.name === "Our Products" ? (
          <Product products={product} dropdown={dropdown} buttonHandle={buttonHandle} />
        ) : (
          <div id={product.id}>{product.name}</div>
        )}
      </>
    );
  }
  