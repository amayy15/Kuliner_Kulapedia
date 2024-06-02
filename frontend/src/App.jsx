import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation, useMatch } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import ListFood from "./components/pages/ListFood/ListFood";
import ListDrink from "./components/pages/ListDrink/ListDrink";
import ListDessert from "./components/pages/ListDessert/ListDessert";
import ContactUs from "./components/Contact/ContactUs";
import Login from "./components/Admin/Login/Login";
import Dashboard from "./components/Admin/Pages/Dashboard/Dashboard";
import Register from "./components/Admin/Register/Register";
import ListAdmin from "./components/Admin/Pages/ListAdmin/ListAdmin";
import Produk from "./components/Admin/Pages/Produk/Produk";
import Create from "./components/Admin/Pages/Produk/Create";
import Update from "./components/Admin/Pages/Produk/Update";
import Detail from "./components/pages/Detail/Detail";

const App = () => {
  const location = useLocation();

  const noNavbarPages = [
    "/admin",
    "/dashboard",
    "/register",
    "/users",
    "/products",
    "/create-product",
    "/update-product/:id",
  ];

  const matchPath = (path, pathname) => {
    const regex = new RegExp(`^${path.replace(/:\w+/g, "\\w+")}$`);
    return regex.test(pathname);
  };

  const isNoNavbarPage = noNavbarPages.some((path) =>
    matchPath(path, location.pathname)
  );

  return (
    <div className="app">
      {!isNoNavbarPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<ListFood />} />
        <Route path="/drink" element={<ListDrink />} />
        <Route path="/dessert" element={<ListDessert />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Produk />} />
        <Route path="/create-product" element={<Create />}></Route>
        <Route path="/update-product/:id" element={<Update />}></Route>
        <Route path="/users" element={<ListAdmin />} />
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
};

export default App;
