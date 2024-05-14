import { Order } from "../models/order.js";

export async function getAllOrders() {
  const orders = await Order.find({});
  return orders;
}
