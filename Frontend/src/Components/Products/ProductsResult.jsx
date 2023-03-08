import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Popup from "../Popup/Popup";
import axios from "axios";
function ProductsResult({ data }) {
  const [visibility, setVisibility] = useState(false);
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div>
      <div className="productsresult">
        <Popup onClose={popupCloseHandler} show={visibility} id={id}></Popup>

        {data &&
          data.map((element) => {
            return (
              <div
                onClick={(e) => {
                  setVisibility(!visibility);
                 
                  console.log(e.target);
                }}
                id={element.id}
                className="pointer"
              >
                <ProductCard
                  key={element.id}
                  name={element.name}
                  imageUrl={element.imageUrl}
                  price={element.price}
                  category={element.category}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProductsResult;
