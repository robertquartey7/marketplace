import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { Bounce } from "react-reveal";
import Tilt from "react-tilt";
import { toast, ToastContainer } from "react-toastify";

function ProductCard({
  id,
  name,
  category,
  price,
  imageUrl,
  delet,
  setChange,
}) {
  const notify = () =>
    toast.success("Item deleted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleDelete = async (e) => {
    axios
      .delete(`${import.meta.env.VITE_APP_URL}store/item/${id}`, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then((res) => {
        notify();
        setChange(true);
      });
  };

  return (
<>
<Bounce left>
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
        {/* <i className="bi bi-cart4 cart pointer"></i> */}
        {delet && (
          <i class="bi bi-trash-fill cart pointer" onClick={handleDelete}></i>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
</Bounce>
</>
  );
}

export default ProductCard;
