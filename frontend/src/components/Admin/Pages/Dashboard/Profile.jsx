import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "./Dashboard.css";
import { BiUser, BiMessage, BiLogoWhatsapp } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
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
      setEmail(decoded.email);
    } catch (error) {}
  };

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      setLoggedIn(false);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="user--courses">
        <div className="course">
          <div className="course--detail">
            <div className="course--cover">
              <BiUser className="icon" />
            </div>
            <div className="course--name">
              <h5 className="title">Name</h5>
              <span className="value">{name}</span>
            </div>
            <div className="course--cover">
              <BiMessage className="icon" />
            </div>
            <div className="course--name">
              <h5 className="title">Email</h5>
              <span className="value">{email}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons" onClick={Logout}>
        <div className="item-logout">
          <AiOutlineLogout className="icon" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
