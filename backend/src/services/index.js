import { addOrder } from "./addOrder.js";
import { addProduct } from "./addProduct.js";
import { addUser } from "./addUser.js";
import { loginUser } from "./loginUser.js";

export const ProductService = { addProduct };
export const OrderService = { addOrder };
export const UserService = { addUser, loginUser };
