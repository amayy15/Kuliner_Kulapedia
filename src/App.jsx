import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import ListFood from "./components/pages/ListFood/ListFood";
import ListDrink from "./components/pages/ListDrink/ListDrink";
import ListDessert from "./components/pages/ListDessert/ListDessert";
import ContactUs from "./components/Contact/ContactUs";


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<ListFood />} />
        <Route path="/drink" element={<ListDrink />} />
        <Route path="/dessert" element={<ListDessert />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
  
    </div>
  );
};

export default App;
