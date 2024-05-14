import { Order } from "../models/order.js";
import { Product } from "../models/product.js";

export async function addOrder(data, authenticatedId) {
  console.log(data);
  const orderProduct = await Product.find({ _id: { $in: data.productIds } });
  const productPrices = orderProduct.map((product) => product.price);
  const totalOrderPrice = sumNumbers(productPrices);
  console.log(totalOrderPrice);
  console.log(productPrices);

  const addedOrder = await Order.create({
    productIds: data.productIds,
    state: "pending",
    totalPrice: totalOrderPrice,
    customerId: authenticatedId,
  });
  return addedOrder;
}

const sumNumbers = (numberArray) => {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  return sum;
};
