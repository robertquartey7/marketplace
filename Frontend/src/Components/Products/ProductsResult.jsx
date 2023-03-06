import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Popup from "../Popup/Popup";

function ProductsResult() {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  return (
    <div>
      <div className="productsresult">
        <Popup
          onClose={popupCloseHandler}
          show={visibility}
          title="Hello Jeetendra"
        >
          <h1>Hello This is Popup Content Area</h1>
          <h2>This is my lorem ipsum text here!</h2>
        </Popup>

        <div onClick={(e) => setVisibility(!visibility)} className="pointer">
          <ProductCard />
        </div>
        <div onClick={(e) => setVisibility(!visibility)} className="pointer">
          <ProductCard />
        </div>
        <div onClick={(e) => setVisibility(!visibility)} className="pointer">
          <ProductCard />
        </div>
        <div onClick={(e) => setVisibility(!visibility)} className="pointer">
          <ProductCard />
        </div>
        <div onClick={(e) => setVisibility(!visibility)} className="pointer">
          <ProductCard />
        </div>
        <div onClick={(e) => setVisibility(!visibility)} className="pointer">
          <ProductCard />
        </div>
        <div onClick={(e) => setVisibility(!visibility)} className="pointer">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default ProductsResult;
