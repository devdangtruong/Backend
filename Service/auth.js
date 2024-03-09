import { userModel } from "../Model/user.js";

export const register = async (req, res, next) => {
  const { fullname, age, email, password, address } = req.body;
  console.log("body >>>", req.body);
};

export const login = async (req, res, next) => {};
