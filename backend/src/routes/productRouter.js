import express from "express";
import { ProductController } from "../controllers/productController.js";

export const productRouter = express
  .Router()
  .post("/", ProductController.postProductCtrl);
