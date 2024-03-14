import express from "express";
import { tryCatchFn } from "../utils/trycatch.js";
import { login, register } from "../Service/auth.js";
import { validateLogin, validateRegister } from "../validation/auth.js";

const authRoute = express.Router();

authRoute.post("/register", tryCatchFn(validateRegister), tryCatchFn(register));
authRoute.post("/login", tryCatchFn(validateLogin), tryCatchFn(login));

export { authRoute };
