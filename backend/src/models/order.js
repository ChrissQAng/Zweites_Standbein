import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    productIds: [
      { type: mongoose.Types.ObjectId, ref: "products", required: true },
    ],
    state: { type: String, required: true, enum: ["pending", "complete"] },
    totalPrice: { type: Number, required: true },
    customerId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  },
  { collection: "orders", timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
