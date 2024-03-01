import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { productRoute } from "./Controller/product.js";

dotenv.config();

const server = express();

server.use(express.json());

server.use("/products", productRoute);

mongoose
  .connect(process.env.MONGODB)
  .then(
    server.listen(process.env.PORT, () =>
      console.log(`Server is running at ${process.env.PORT}`)
    )
  );
