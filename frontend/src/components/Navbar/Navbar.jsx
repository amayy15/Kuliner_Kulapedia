import "./Navbar.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{ position: "fixed", width: "100%", top: 0, zIndex: 100 }}
    >
      <img src="src/assets/wayang-removebg.png" alt="" className="logo" />
      <div style={{ display: "flex" }}>
        <p>
          <span className="kula">Kula</span>
          <span className="pedia">pedia</span>
        </p>
      </div>

      <ul className="navbar-right">
        <li>
          <NavLink to="/" className="button-link-navbar">
            Home
          </NavLink>
        </li>
        <li>
          <a href="#aboutUs">About Us</a>
        </li>
        <li>
          <a href="#categories">Categories</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
