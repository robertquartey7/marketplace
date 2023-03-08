import { useEffect, useState } from "react";
import popupStyles from "./Popup.module.css";
import PropTypes from "prop-types";
import ProductCard from "../Products/ProductCard";
import axios from "axios";

const Popup = (props) => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState()
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_APP_URL}store/item/${props.id}`)
    .then(res=>{
      console.log(res.data)
    })
  })

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <h2>{props.name}</h2>
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <div className={popupStyles.content}>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Popup;
