import express from "express";
import { OrderController } from "../controllers/orderController.js";

export const orderRouter = express
  .Router()
  .post("/", OrderController.postOrderCtrl);
