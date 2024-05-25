import React from "react";
import "./ListDessert.css";
import { Link } from "react-router-dom";

const ListDessert = () => {
  return (
    <div>
      <div className="dessert-contents-wrapper">
        <h1>Kategori Dessert</h1>
        <div className="dessert-contents">
          <div className="card-listDessert">
            <img
              src="src/assets/wingko.png"
              className="card-listDessert-img-top"
              alt="..."
            />
            <div className="card-listDessert-body">
              <h5 className="card-listDessert-title">Card title</h5>
              <p className="card-listDessert-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listDessert">
            <img
              src="src/assets/wingko.png"
              className="card-listDessert-img-top"
              alt="..."
            />
            <div className="card-listDessert-body">
              <h5 className="card-listDessert-title">Card title</h5>
              <p className="card-listDessert-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listDessert">
            <img
              src="src/assets/wingko.png"
              className="card-listDessert-img-top"
              alt="..."
            />
            <div className="card-listDessert-body">
              <h5 className="card-listDessert-title">Card title</h5>
              <p className="card-listDessert-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listDessert">
            <img
              src="src/assets/wingko.png"
              className="card-listDessert-img-top"
              alt="..."
            />
            <div className="card-listDessert-body">
              <h5 className="card-listDessert-title">Card title</h5>
              <p className="card-listDessert-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listDessert">
            <img
              src="src/assets/wingko.png"
              className="card-listDessert-img-top"
              alt="..."
            />
            <div className="card-listDessert-body">
              <h5 className="card-listDessert-title">Card title</h5>
              <p className="card-listDessert-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
          <div className="card-listDessert">
            <img
              src="src/assets/wingko.png"
              className="card-listDessert-img-top"
              alt="..."
            />
            <div className="card-listDessert-body">
              <h5 className="card-listDessert-title">Card title</h5>
              <p className="card-listDessert-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="button-link">
                See Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-extras">
          <div className="extras1">
            <img src="" alt="" />
            <p><span class="kula">Kula</span><span class="pedia">pedia</span></p>
              <h1>Discover an unforgettable culinary and historical adventure
              with Kulapedia! 
              </h1>
          </div>
          <div className="extras2">
            <ul className="extra">
              <br></br>
              <p>Explore</p>
              <br></br>
              <li><a href="#header" className="footer-link">Home</a></li>
              <li><a href="#aboutUs" className="footer-link">About Us</a></li>
              <li><a href="#categories" className="footer-link">Categories</a></li>
              <li><a href="#resep" className="footer-link">Recipe's</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
            </ul>
            <ul className="extra">
              <br></br>
              <p>Extras</p>
              <br></br>
              <li><a href="#contact" className="footer-link">FAQ</a></li>
              <li><a href="#contact" className="footer-link">Privacy Policy</a></li>
              <li><a href="#contact" className="footer-link">Terms &</a></li>
              <li><a href="#contact" className="footer-link">Conditions</a></li>
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
