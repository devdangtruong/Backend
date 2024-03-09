import mongoose from "mongoose";
import { userModel } from "./user.js";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number || String,
  information: [String],
  poster: {
    type: mongoose.Types.ObjectId,
    ref: userModel,
  },
});

const productModel = mongoose.model("product", productSchema);

export { productModel };
