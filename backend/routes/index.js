import express from "express";
import { getUsers, Register, Login, Logout } from "../controller/Users.js";
import { getProducts, getProductById, saveProduct, updateProduct, deleteProduct, getProductsByCategory } from "../controller/Product.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

//authentications
router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

//products
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.get("/products/category/:category", getProductsByCategory);
router.post("/products", saveProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
