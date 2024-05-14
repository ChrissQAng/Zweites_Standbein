import { Product } from "../models/product.js";

export async function addProduct(data) {
  const addedProduct = await Product.create(data);
  return addedProduct;
}
