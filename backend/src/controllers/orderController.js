import { OrderService } from "../services/index.js";

async function postOrderCtrl(req, res) {
  try {
    const newOrder = req.body;

    const addedOrder = await OrderService.addOrder(
      newOrder,
      req.authenticatedId
    );
    res.json(addedOrder);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not add order" });
  }
}

async function getAllOrdersCtrl(req, res) {
  try {
    const result = await OrderService.getAllOrders();
    res.json(result);
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .json({ err, message: err.message || "Could not find all products" });
  }
}

export const OrderController = {
  postOrderCtrl,
  getAllOrdersCtrl,
};
