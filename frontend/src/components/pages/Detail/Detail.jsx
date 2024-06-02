import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Detail.css"; // Pastikan Anda memiliki file CSS untuk gaya komponen ini
const Detail = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [method, setMethod] = useState("");
  const [material, setMaterial] = useState("");
  const [category, setCategory] = useState("");
  const [alamat, setAlamat] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      if (response.data) {
        setName(response.data.name || "");
        setImage(response.data.Image || "");
        setPrice(response.data.price || "");
        setMethod(response.data.method || "");
        setMaterial(response.data.material || "");
        setCategory(response.data.category || "");
        setAlamat(response.data.alamat || "");
      } else {
        console.log("No data found for the given ID");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPreviewUrl = (image) => {
    if (!image) return "";
    return image.startsWith("blob")
      ? image
      : `http://localhost:5000/images/${image}`;
  };

  const previewUrl = getPreviewUrl(image);

  return (
    <div className="detail-container">
      <div className="detail-product">
        <h1>Product Details</h1>
        <div className="product-detail">
          <div className="detail-group">
            <label>Name:</label>
            <p>{name}</p>
          </div>
          <div className="detail-group">
            <label>Image:</label>
            {previewUrl ? (
              <div className="image-container">
                <img src={previewUrl} alt={name} />
              </div>
            ) : (
              <p>No image available</p>
            )}
          </div>
          <div className="detail-group">
            <label>Price:</label>
            <p>{price}</p>
          </div>
          <div className="detail-group">
            <label>Method:</label>
            <p>{method}</p>
          </div>
          <div className="detail-group">
            <label>Material:</label>
            <p>{material}</p>
          </div>
          <div className="detail-group">
            <label>Category:</label>
            <p>{category}</p>
          </div>
          <div className="detail-group">
            <label>Alamat:</label>
            <p>{alamat}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
