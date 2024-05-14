import express from "express";

import { UserController } from "../controllers/userController.js";

export const userRouter = express
  .Router()
  // .post("/", UserController.postUserCtrl);
  .post("/veryfyEmail", UserController.postVerifyUserEmailCtrl)
  .post("/register", UserController.postRegisterUserCtrl);
