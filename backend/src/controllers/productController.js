import { ProductService } from "../services/index.js";

async function postProductCtrl(req, res) {
  try {
    const newProduct = req.body;

    const addedProduct = await ProductService.addProduct(newProduct);
    res.json(addedProduct);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not add product" });
  }
}

export const ProductController = {
  postProductCtrl,
};
