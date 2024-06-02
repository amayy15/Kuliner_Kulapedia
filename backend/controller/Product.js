import express from "express";
import Product from "../models/ProductModel.js";
import path from "path";
import fs from "fs";

export const getProducts = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const response = await Product.findAll({
      where: {
        category: req.params.category,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const saveProduct = async (req, res) => {
  if (!req.files || !req.files.image) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const { name, price, method, material, category, alamat } = req.body;
  const image = req.files.image;
  const imageSize = image.data.length;
  const ext = path.extname(image.name).toLowerCase();
  const imageName = `${image.md5}${ext}`;
  const allowedTypes = [".png", ".jpg", ".jpeg"];

  if (!allowedTypes.includes(ext)) {
    return res.status(400).json({ msg: "File type not allowed" });
  }

  if (imageSize > 5000000) {
    return res.status(400).json({ msg: "File size too large" });
  }

  const uploadPath = `./public/images/${imageName}`;

  try {
    // Pindahkan file gambar ke direktori yang ditentukan
    await image.mv(uploadPath);
    console.log("File uploaded successfully to", uploadPath);

    // Buat entri produk di database
    const product = await Product.create({
      name: name,
      Image: imageName,
      price: price,
      method: method,
      material: material,
      category: category,
      alamat: alamat,
    });

    console.log("Product created successfully:", product);

    if (product) {
      return res.status(201).json({ msg: "Product created", product });
    } else {
      return res.status(500).json({ msg: "Failed to create product" });
    }
  } catch (error) {
    console.error("Error during product creation:", error.message);
    return res.status(500).json({ msg: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!product) return res.status(404).json({ msg: "Product not found" });
  let imageName = product.Image;
  if (req.files && req.files.image) {
    const image = req.files.image;
    const imageSize = image.data.length;
    const ext = path.extname(image.name).toLowerCase();
    imageName = `${image.md5}${ext}`;
    const allowedTypes = [".png", ".jpg", ".jpeg"];

    if (!allowedTypes.includes(ext)) {
      return res.status(400).json({ msg: "File type not allowed" });
    }

    if (imageSize > 5000000) {
      return res.status(400).json({ msg: "File size too large" });
    }

    const uploadPath = `./public/images/${imageName}`;

    await image.mv(uploadPath);
  }

  const { name, price, method, material, category, alamat } = req.body;

  try {
    await Product.update(
      {
        name: name,
        Image: imageName,
        price: price,
        method: method,
        material: material,
        category: category,
        alamat: alamat,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Product updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal server error" });
  }
};
export const deleteProduct = async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!product) return res.status(404).json({ msg: "Product not found" });
  try {
    const filepath = `./public/images/${product.Image}`;
    fs.unlinkSync(filepath);
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Product deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
