import React from "react";
import Tilt from "react-tilt";

import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="hero__box container-fluid rounded shadow">
        <div className="hero__left">
          <h1>
            We Sell <span className="everything">Everything</span> Under The
            Sun.
          </h1>
          <div className="d-flex gap-2">
            <button className="btn bg-primary-subtle">Buy Now</button>
            <button className="btn btn-outline-primary">Learn More</button>
          </div>
        </div>
        <div className="hero__right">
          <Tilt
            className="Tilt img__container"
            options={{ max: 25 }}
        
          >
           <img src="./img/hero.png" alt="hero.png" className="img-fluid" />
          </Tilt>
         
        </div>
      </div>
    </div>
  );
}

export default Hero;
