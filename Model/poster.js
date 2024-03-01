import mongoose from "mongoose";

const posterSchema = new mongoose.Schema({
  fullname: String,
  age: String || Number,
  email: String,
  password: String,
  address: String,
});

const posterModel = mongoose.model("poster", posterSchema);

export { posterModel };
