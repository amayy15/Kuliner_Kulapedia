import React from "react";
import "./Produk.css";
import { Link } from "react-router-dom";
import { BiBookAlt } from "react-icons/bi";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSetting,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

const Produk = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-container">
      <div className="sidebar">
        <div className="menu">
          <div className="logo-admin">
            <BiBookAlt className="logo-icon" />
            <h2>ADMIN</h2>
          </div>

          <div className="menu--list">
            <Link to="/dashboard" className="item">
              <AiOutlineHome className="icon" />
              <span>Dashboard</span>
            </Link>

            <Link to="/users" className="item">
              <AiOutlineUser className="icon" />
              <span>Users</span>
            </Link>

            <Link to="/products" className="item active">
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

      <div className="content">
        <div className="content-header">
          <h1>Products</h1>
          <Link to="/create-product" className="btn-create">
            Create
          </Link>
        </div>
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Method</th>
              <th>Material</th>
              <th>Category</th>
              <th>Alamat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  {product.Image && (
                    <img
                      src={`http://localhost:5000/images/${product.Image}`}
                      alt="product"
                      className="product-image"
                    />
                  )}
                </td>
                <td>{product.price}</td>
                <td>{product.method}</td>
                <td>{product.material}</td>
                <td>{product.category}</td>
                <td>{product.alamat}</td>
                <td>
                  <Link to={`/update-product/${product.id}`} className="btn-edit">
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Produk;
