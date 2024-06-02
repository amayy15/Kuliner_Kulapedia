import React from "react";
import "./ListDessert.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ListDessert = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductsByCategory("Camilan");
  }, []);

  const getProductsByCategory = async (category) => {
    const response = await axios.get(
      `http://localhost:5000/products/category/${category}`
    );
    setProducts(response.data);
  };
  return (
    <div>
      <div className="dessert-contents-wrapper">
        <h1>Kategori Dessert</h1>
        <div className="dessert-contents">
          {products.map((product) => (
            <div className="card-listDessert" key={product.id}>
              {product.Image && (
                <img
                  src={`http://localhost:5000/images/${product.Image}`}
                  className="card-listDessert-img-top"
                  alt="..."
                />
              )}
              <div className="card-listDessert-body">
                <h5 className="card-listDessert-title">{product.name}</h5>
                <p className="card-listDessert-text">Rp {product.price}</p>
                <Link to={`/detail/${product.id}`} className="button-link">
                  See Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div className="footer-extras">
          <div className="extras1">
            <img src="" alt="" />
            <p>
              <span className="kula">Kula</span>
              <span className="pedia">pedia</span>
            </p>
            <h1>
              Discover an unforgettable culinary and historical adventure with
              Kulapedia!
            </h1>
          </div>
          <div className="extras2">
            <ul className="extra">
              <br></br>
              <p>Explore</p>
              <br></br>
              <li>
                <a href="#header" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#aboutUs" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#categories" className="footer-link">
                  Categories
                </a>
              </li>
              <li>
                <a href="#resep" className="footer-link">
                  Recipe's
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="extra">
              <br></br>
              <p>Extras</p>
              <br></br>
              <li>
                <a href="#contact" className="footer-link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Terms &
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copr">
          Copyright &copy; by Kulapedia. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ListDessert;
