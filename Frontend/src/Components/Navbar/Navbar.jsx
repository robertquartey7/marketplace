import React from "react";
import { Link } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import Search from "../Search/Search";
function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm bg-dark navbar-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img
              src="/img/logo.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            <span>SkyCart</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <SLink
                  className="nav-link active pointer"
                  aria-current="page"
                  to="products"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Products
                </SLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" >
                  About 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/store">
                  Store
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div>
              {/* profile */}
              <Search />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
