import { useState } from "react";
import { category } from "../product-category";
import ShowProduct from "./showProduct";
import Category from "./category";
export default function Main2() {
  const [categor, setCategory] = useState("electronics");
  const updateCategory = (value) => {
    setCategory(value);
  };

  return (
    <div className="main2">
      <div className="newP">
        <div className="new-product">New products</div>
        <div className="lined"></div>
      </div>
      <svg
        className="star-2"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 0L12.789 9.21102L22 11L12.789 12.789L11 22L9.21102 12.789L0 11L9.21102 9.21102L11 0Z"
          fill="black"
        />
      </svg>
      <div className="choice">
        {category.map((option) => (
          <Category option={option} updateCategory={updateCategory} />
        ))}
      </div>
      <div className="show-product">
        <ShowProduct categor={categor} />
      </div>
      <img className="arrow-1" src="https://imagetolink.com/ib/ISRu2wkJLv.png"></img>
      <img className="arrow-2" src="https://cdn-icons-png.flaticon.com/128/3114/3114883.png"></img>
    </div>
  );
}
