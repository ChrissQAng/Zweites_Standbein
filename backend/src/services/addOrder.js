import { Order } from "../models/order.js";

export async function addOrder(data) {
  const addedOrder = await Order.create(data);
  return addedProduct;
}
