import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    variations: [{ type: String, required: true }],
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    picUrl: { type: String, default: "placeholder.jpg" },
  },
  { collection: "products", timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
