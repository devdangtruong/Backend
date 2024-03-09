import express from "express";
import { tryCatchFn } from "../utils/trycatch.js";
import { createUser, showUsers } from "../Service/user.js";

const userRoute = express.Router();

userRoute.get("/", tryCatchFn(showUsers));
userRoute.post("/", tryCatchFn(createUser));

export { userRoute };
