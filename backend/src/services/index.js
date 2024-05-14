import { addOrder } from "./addOrder.js";
import { addProduct } from "./addProduct.js";
import { addUser } from "./addUser.js";
import { getAllOrders } from "./getAllOrders.js";
import { getAllProducts } from "./getAllProducts.js";
import { loginUser } from "./loginUser.js";
import { registerUser } from "./registerUser.js";
import { verifyUserEmail } from "./verifyUserEmail.js";

export const ProductService = { addProduct, getAllProducts };
export const OrderService = { addOrder, getAllOrders };
export const UserService = {
  addUser,
  loginUser,
  verifyUserEmail,
  registerUser,
};
