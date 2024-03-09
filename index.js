import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { productRoute } from "./Controller/product.js";
import { userRoute } from "./Controller/user.js";
import { authRoute } from "./Controller/auth.js";

dotenv.config();

const server = express();

server.use(express.json());

server.use("/products", productRoute);
server.use("/users", userRoute);
server.use("/auth", authRoute);
server.use("/", (req, res) => {
  res.status(200).send(`Hello world!`);
});

mongoose
  .connect(process.env.MONGODB)
  .then(
    server.listen(process.env.PORT, () =>
      console.log(`Server is running at ${process.env.PORT}`)
    )
  );
