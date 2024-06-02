import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiBookAlt, BiEdit } from "react-icons/bi";
import "./Dashboard.css";
import UserImg from "../../../../assets/frontend-assets/profile.png";
import Profile from "./Profile";
import Card from "./Card";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
    } catch (error) {
      if (error.response) {
        navigate("/admin");
      }
    }
  };

  const logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="menu">
          <div className="logo-admin">
            <BiBookAlt className="logo-icon" />
            <h2>ADMIN</h2>
          </div>

          <div className="menu--list">
            <Link to="/dashboard" className="item active">
              <AiOutlineHome className="icon" />
              <span>Dashboard</span>
            </Link>

            <Link to="/users" className="item">
              <AiOutlineUser className="icon" />
              <span>Users</span>
            </Link>

            <Link to="/products" className="item">
              <AiOutlineShoppingCart className="icon" />
              <span>Products</span>
            </Link>

            <Link to="/settings" className="item">
              <AiOutlineSetting className="icon" />
              <span>Settings</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="dashboard--content">
        <div className="content--header">
          <h1 className="header--title">Dashboard</h1>
          <Card />
        </div>
      </div>

      <div className="profile">
        <div className="profile--header">
          <h1>Profile</h1>
          <div className="edit">
            <BiEdit className="icon" />
          </div>
        </div>
        <div className="user--profile">
          <div className="user--detail">
            <img src={UserImg} alt="" />
            <h3 className="username">{name}</h3>
          </div>

          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
