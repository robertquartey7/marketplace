import React from "react";
import { Link } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import Search from "../Search/Search";
function Navbar() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-sm bg-dark navbar-dark"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to={"/"}>
            <img
              src="/img/logo.png"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            <span>SkyCart</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <SLink
                  class="nav-link active pointer"
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
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
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
