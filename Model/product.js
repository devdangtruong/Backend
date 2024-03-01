import mongoose from "mongoose";
import { posterModel } from "./poster.js";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number || String,
  information: [String],
  poster: {
    type: mongoose.Types.ObjectId,
    ref: posterModel,
  },
});

const productModel = mongoose.model("product", productSchema);

export { productModel };
