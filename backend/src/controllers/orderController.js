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

export const OrderController = {
  postOrderCtrl,
};
