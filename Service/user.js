import { userModel } from "../Model/user.js";
import bcrypt from "bcrypt";

export const showUsers = async (req, res, next) => {
  const user = await userModel.find();
  res.status(200).send(user);
};

export const createUser = async (req, res, next) => {
  console.log(req.body);
  const { fullname, account, email, password } = req.body;

  const salts = await bcrypt.genSalt(10);
  const hashingPassword = await bcrypt.hash(password, salts);
  const user = await userModel.create({
    fullname,
    account,
    email,
    password: hashingPassword,
  });
  res.status(200).send(user);
};
