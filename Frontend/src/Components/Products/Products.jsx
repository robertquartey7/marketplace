import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductsResult from "./ProductsResult";
import { Link } from "react-scroll";
import axios from "axios";
function Products() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_URL}store/items`).then((res) => {
      setData(res.data.data);
    });
  }, []);

  const handleClick = async (e) => {

    if(e.target.name === "all"){
      axios.get(`${import.meta.env.VITE_APP_URL}store/items`).then((res) => {
        setData(res.data.data);
      });
    }else{
      axios
      .get(
        `${import.meta.env.VITE_APP_URL}store/items?category=${e.target.name}`
      )
      .then((res) => {
        setData(res.data.data);
        console.log(data);
      });
    }
    
   
  };

  return (
    <div id="products" className="products bg-light text-black container-fluid">
      <div className="navigation">
        <div className="container-fluid">
          <nav className="navbar navbar-inverse pro-nav">
            <div className="container-fluid d-flex justify-content-center border-bottom">
              <ul className="bg-light text-black products-nav ">
                <Link
                  id="len1"
                  className="hoverable btn"
                  name="all"
                  onClick={handleClick}
                  to='products'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  All
                </Link>
                <Link
                  id="len2"
                  className="hoverable btn"
                  to="products"
                  onClick={handleClick}
                  name="mobile"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Mobile
                </Link>
                <Link
                  id="len3"
                  className="hoverable btn"
                  to="products"
                  onClick={handleClick}
                  name="laptop"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Laptop
                </Link>
                <Link
                  id="len4"
                  className="hoverable btn"
                  to="products"
                  onClick={handleClick}
                  name="watches"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Watches
                </Link>
              </ul>
            </div>
          </nav>
          <div className="row">
            <ProductsResult data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
