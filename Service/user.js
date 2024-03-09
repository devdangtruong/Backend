import { userModel } from "../Model/user.js";
import bcrypt from "bcrypt";

export const showUsers = async (req, res, next) => {
  const user = await userModel.find();
  res.status(200).send(user);
};

export const createUser = async (req, res, next) => {
  const { fullname, age, email, password, address } = req.body;
  const salts = await bcrypt.genSalt(10);
  const hashingPassword = await bcrypt.hash(password, salts);
  const user = await userModel.create({
    fullname,
    age,
    email,
    password: hashingPassword,
    address,
  });
  res.status(200).send(user);
};
