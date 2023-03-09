import React from "react";
import "./About.css";
import Robert from "../../Images/robert2.jpg";
import Kashanna from "../../Images/kashanna.jpeg";
import Kwame from "../../Images/kwame3.jpg";
import { Roll } from "react-reveal";
export default function AboutPage() {
  return (
    <>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>
          Here at SKY CART, we bring about the best and brightness minds
          together to create greatness!
        </p>
        <p>Down below will show you our 3 major players:</p>
      </div>

      <h2 className="h2-text" style={{ textAlign: "center" }}>
        Our Team
      </h2>
      <div className="row">
       <Roll left>
       <div className="column">
          <div className="card bg-dark">
            <img className="card-image" src={Robert} alt="Robert Quartey" />
            <div className="container">
              <h2 className="names">Robert Quartey</h2>
              <p className="title">Product Lead | Software Engineer</p>
              <p>Tech Bro 🤖.</p>
              <p>robert@skycart.com</p>
              <p>
                <a
                  className="button"
                  href="https://www.linkedin.com/in/robert-quartey-772b69193/"
                  target={"_blank"}
                >
                  Contact
                </a>
              </p>
            </div>
          </div>
        </div>
       </Roll>

      <Roll left>
      <div className="column">
          <div className="card bg-dark">
            <img className="card-image" src={Kashanna} alt="Kashanna Dorsey" />
            <div className="container">
              <h2 className="names">Kashanna Dorsey</h2>
              <p className="title">Team Member | Software Engineer</p>
              <p>Tech Bro 👻. </p>
              <p>kashanna@skycart.com</p>
              <p>
                <a
                  className="button"
                  href="https://www.linkedin.com/in/kdorsey35"
                  target={"_blank"}
                >
                  Contact
                </a>
              </p>
            </div>
          </div>
        </div>
      </Roll>

       <Roll left>
       <div className="column">
          <div className="card bg-dark">
            <img className="card-image" src={Kwame} alt="Kwame Bullen" />
            <div className="container">
              <h2 className="names">Kwame Bullen</h2>
              <p className="title">Team Member | Software Engineer</p>
              <p>Tech Bro 😎.</p>
              <p>kwame@skycart.com</p>
              <p>
                <a
                  className="button"
                  href="https://www.linkedin.com/in/kwamebullen/"
                  target={"_blank"}
                >
                  Contact
                </a>
              </p>
            </div>
          </div>
        </div>
       </Roll>
      </div>
    </>
  );
}
