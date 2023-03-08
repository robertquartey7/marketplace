import React from "react";
import Tilt from "react-tilt";

function ProductCard({id, name, category, price, imageUrl}) {
  return (
    <div className="products__card bg-dark ">
      <Tilt className="Tilt  products__1" options={{ max: 25 }}>
        <img
          src={`${import.meta.env.VITE_APP_URL}images/${imageUrl}`}
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
          {category}
        </p>
        <h5>{name}</h5>
        <h6>${price}</h6>
      </div>
      <div className="cart__box products__3">
        <i className="bi bi-cart4 cart pointer"></i>
      </div>
    </div>
  );
}

export default ProductCard;
