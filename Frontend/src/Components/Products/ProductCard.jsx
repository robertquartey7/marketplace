import React from "react";
import Tilt from "react-tilt";

function ProductCard() {
  return (
    <div className="products__card bg-dark ">
      <Tilt className="Tilt  products__1" options={{ max: 25 }}>
        <img
          src="./img/image.png "
          alt=""
          className="img-fluid"
          height={"150px"}
          width="100px"
        />
      </Tilt>
      <div className="p-2 products__2 text-white">
        <p
          style={{
            color: "#3F497F",
          }}
        >
          laptop
        </p>
        <h5>iphone 7</h5>
        <h6>$300</h6>
      </div>
      <div className="cart__box products__3">
        <i class="bi bi-cart4 cart pointer"></i>
      </div>
    </div>
  );
}

export default ProductCard;
