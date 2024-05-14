import { addOrder } from "./addOrder.js";
import { addProduct } from "./addProduct.js";
import { addUser } from "./addUser.js";
import { loginAdmin } from "./loginAdmin.js";
import { loginCustomer } from "./loginCustomer.js";

export const ProductService = { addProduct };
export const OrderService = { addOrder };
export const UserService = { addUser, loginCustomer, loginAdmin };
