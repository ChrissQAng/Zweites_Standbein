import express from "express";
import { OrderController } from "../controllers/orderController.js";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";

export const orderRouter = express
  .Router()
  .get("/", doJwtAuth, OrderController.getAllOrdersCtrl)
  .post("/", doJwtAuth, OrderController.postOrderCtrl);
