import React from "react";
import Tilt from "react-tilt";
import { Link } from "react-scroll";
import { Link as RLink } from "react-router-dom";

import "./Hero.css";
import { Bounce } from "react-reveal";
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
            <Bounce left>
              <Link
                className="btn bg-primary-subtle"
                aria-current="page"
                to="products"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Buy Now
              </Link>
            </Bounce>
            <Bounce right>
              <RLink className="btn btn-outline-primary" to={"/about"}>
                Learn More
              </RLink>
            </Bounce>
          </div>
        </div>
        <div className="hero__right">
          <Tilt className="Tilt img__container" options={{ max: 25 }}>
            <img src="./img/hero.png" alt="hero.png" className="img-fluid" />
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
