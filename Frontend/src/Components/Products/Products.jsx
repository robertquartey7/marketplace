import React from "react";
import "./Products.css";
import ProductsResult from "./ProductsResult";
function Products() {
  return (
    <div id="products" className="products bg-light text-black container-fluid">
      <div className="navigation">
        <div class="container-fluid">
          <nav class="navbar navbar-inverse pro-nav">
            <div class="container-fluid d-flex justify-content-center border-bottom">
              <ul class="bg-light text-black products-nav ">
                <a id="len1" class="hoverable btn" href="#">
                  All
                </a>
                <a id="len2" class="hoverable btn" href="#">
                  Mobile
                </a>
                <a id="len3" class="hoverable btn" href="#">
                  Laptop
                </a>
                <a id="len4" class="hoverable btn" href="#">
                  Watches
                </a>
              </ul>
            </div>
          </nav>
          <div className="row">
            <ProductsResult/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
