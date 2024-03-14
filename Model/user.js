import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: String,
  account: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("user", userSchema);

export { userModel };
