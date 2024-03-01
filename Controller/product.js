import express from "express";
import { tryCatchFn } from "../utils/trycatch.js";
import { postProducts, showProducts } from "../Service/product.js";

const productRoute = express.Router();

productRoute.get("/", tryCatchFn(showProducts));
productRoute.post("/", tryCatchFn(postProducts));
export { productRoute };
