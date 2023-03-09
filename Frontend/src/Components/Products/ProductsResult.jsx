import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Popup from "../Popup/Popup";
import axios from "axios";
function ProductsResult({ data }) {
  const [visibility, setVisibility] = useState(false);
  const [products, setProducts] = useState([]);
  // const [id, setId] = useState("");

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div>
      <div className="productsresult">
        <Popup onClose={popupCloseHandler} show={visibility}></Popup>

        {data &&
          data.map((element) => {
            return (
              <div
                key={element.id}
                onClick={(e) => {
                  setVisibility(!visibility);

                 
                }}
                className="pointer"
              >
                <ProductCard
                  
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
