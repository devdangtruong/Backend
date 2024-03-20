import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
  information: String,
});

const productModel = mongoose.model("product", productSchema);

export { productModel };
