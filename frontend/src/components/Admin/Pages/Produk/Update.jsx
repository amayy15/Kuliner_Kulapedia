import React from "react";
import "./Produk.css";
import { BiBookAlt } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSetting,
} from "react-icons/ai";

const Update = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [price, setPrice] = useState("");
  const [method, setMethod] = useState("");
  const [material, setMaterial] = useState("");
  const [category, setCategory] = useState("");
  const [alamat, setAlamat] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`);

      setName(response.data.name);
      setImage(response.data.Image);
      setPreview(response.data.Image);
      setPrice(response.data.price);
      setMethod(response.data.method);
      setMaterial(response.data.material);
      setCategory(response.data.category);
      setAlamat(response.data.alamat);
    } catch (error) {
      console.log(error);
    }
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setImage(image);

    const imageUrl = URL.createObjectURL(image);
    setPreview(imageUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("method", method);
    formData.append("material", material);
    formData.append("category", category);
    formData.append("alamat", alamat);

    try {
      await axios.patch(`http://localhost:5000/products/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  const getPreviewUrl = (preview) => {
    if (!preview) return "";
    return preview.startsWith("blob")
      ? preview
      : `http://localhost:5000/images/${preview}`;
  };

  const previewUrl = getPreviewUrl(preview);

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

      <div className="create-product">
        <h1>Update Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <div className="image">
              <label className="image-label">
                <input
                  type="file"
                  name="image"
                  className="image-input"
                  //value={product.image}
                  onChange={loadImage}
                />
              </label>
            </div>
          </div>

          {previewUrl && (
            <div className="image-container">
              <img src={previewUrl} alt="Preview Image" />
            </div>
          )}
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter product price"
            />
          </div>
          <div className="form-group">
            <label>Method</label>
            <input
              type="text"
              name="method"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              placeholder="Enter product method"
            />
          </div>
          <div className="form-group">
            <label>Material</label>
            <input
              type="text"
              name="material"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              placeholder="Enter product material"
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter product category"
            />
          </div>
          <div className="form-group">
            <label>Alamat</label>
            <input
              type="text"
              name="alamat"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              placeholder="Enter product alamat"
            />
          </div>
          <button type="submit" className="btn-create">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
