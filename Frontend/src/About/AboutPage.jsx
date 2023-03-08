import React from "react";
import "./About.css";
import Robert from "../Images/robert2.jpg";
import Kashanna from "../Images/kashanna.jpeg";
import Kwame from "../Images/kwame3.jpg"; 

export default function AboutPage() {
    return (
        <>
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Here at SKY CART, we bring about the best and brightness minds together to create greatness!</p>
                <p>Down below will show you our 3 major players:</p>
            </div>

            <h2 className="h2-text" style={{textAlign:"center"}}>Our Team</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img className="card-image" src={Robert} alt="Robert Quartey" 
                         />
                            <div className="container">
                                <h2 className="names">Robert Quartey</h2>
                                <p className="title">Co-Founder | Principle Software Engineer</p>
                                <p>Tech Bro 🤖.</p>
                                <p>robert@skycart.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img className="card-image" src={Kashanna} alt="Kashanna Dorsey" 
                        />
                            <div className="container">
                                <h2 className="names">Kashanna Dorsey</h2>
                                <p className="title">Co-Founder | Product Manager - Design Systems</p>
                                <p>Tech Bro 👻. </p>
                                <p>kashanna@skycart.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img className="card-image" src={Kwame} alt="Kwame Bullen" 
                        />
                            <div className="container">
                                <h2 className="names">Kwame Bullen</h2>
                                <p className="title">Co-Founder | Technology Manager and Strategy</p>
                                <p>Tech Bro 😎.</p>
                                <p>kwame@skycart.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

