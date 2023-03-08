import React from "react";
import "./Search.css";
function SerachResults({ imageUrl, name }) {
  return (
    <div>
      <div className="d-flex m-2 align-items-center pointer ">
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
