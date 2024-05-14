import express from "express";
import { UserController } from "../controllers/userController.js";

export const loginRouter = express
  .Router()
  .post("/", UserController.loginUserCtrl);
