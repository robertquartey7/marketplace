import React, { useState } from "react";
import Popup from "../Popup/Popup";
import "./Search.css";
function SerachResults({ imageUrl, name, id}) {
  const [visibility, setVisibility] = useState(false);
  
  // const [id, setId] = useState("");

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };


  return (
    <div>
          <Popup onClose={popupCloseHandler} show={visibility} id={id}></Popup>
      <div className="d-flex m-2 align-items-center pointer " onClick={(e) => {
                  setVisibility(!visibility);

                  console.log(e.target);
                }}>
        <img
          src={`${import.meta.env.VITE_APP_URL}images/${imageUrl}`}
          style={{ height: "64px", width: "64px" }}
          alt=""
        />
        <div className="ml-3">
          <div>{name}</div>
        </div>
      </div>
    </div>
  );
}

export default SerachResults;
