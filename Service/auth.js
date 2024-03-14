import { userModel } from "../Model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import _ from "lodash";

export const register = async (req, res, next) => {
  const { fullname, account, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashingPassword = await bcrypt.hash(password, salt);

  const user = await userModel.create({
    fullname,
    account,
    email,
    password: hashingPassword,
  });
  res.status(200).send(user);
};

export const login = async (req, res, next) => {
  const { account, email, password } = req.body;
  const user = await userModel.findOne({ account, email });
  const result = bcrypt.compare(password, user.password);
  if (!result) {
    throw new Error(`User, email or password is incorrect`);
  }
  const payload = {
    id: user._id.toString(),
    account: user.account,
    email: user.email,
  };
  const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {
    expiresIn: "30s",
  });

  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {
    expiresIn: "1d",
  });

  res.status(200).send({ accessToken, refreshToken });
};

export const refresh = (req, res, next) => {
  const { refreshToken } = req.body;
  const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN);

  const newPayload = _.omit(payload, ["exp", "iat"]);

  const accessToken = jwt.sign(newPayload, process.env.JWT_ACCESS_TOKEN, {
    expiresIn: "30s",
  });

  const newRefreshToken = jwt.sign(newPayload, process.env.JWT_REFRESH_TOKEN, {
    expiresIn: "1d",
  });

  return res.status(200).send({ accessToken, refreshToken: newRefreshToken });
};
