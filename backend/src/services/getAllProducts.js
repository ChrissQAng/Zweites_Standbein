import { Product } from "../models/product.js";

export async function getAllProducts() {
  const products = await Product.find({});
  return products;
}
