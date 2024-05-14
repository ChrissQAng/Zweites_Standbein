import express from "express";
import { OrderController } from "../controllers/orderController.js";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";

export const orderRouter = express
  .Router()

  .post("/", doJwtAuth, OrderController.postOrderCtrl);
