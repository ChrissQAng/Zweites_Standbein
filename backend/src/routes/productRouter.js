import express from "express";
import { ProductController } from "../controllers/productController.js";

export const productRouter = express
  .Router()
  .get("/", ProductController.getAllProductsCtrl)
  .post("/", ProductController.postProductCtrl);
