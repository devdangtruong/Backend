import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: String,
  age: String || Number,
  email: String,
  password: String,
  address: String,
});

const userModel = mongoose.model("user", userSchema);

export { userModel };
