import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDatabase } from "./models/index.js";

import { productRouter } from "./routes/productRouter.js";
import { orderRouter } from "./routes/orderRouter.js";
import { userRouter } from "./routes/userRouter.js";
import { loginRouter } from "./routes/loginRouter.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.static("images"));
app.use(express.json());

app.use("/api/v1/products", productRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/login", loginRouter);

try {
  await connectToDatabase();
  const PORT = 3020;
  app.listen(PORT, () => console.log("Server listening at port", PORT));
} catch (err) {
  console.log(err);
  process.exit(); // node prozess beenden
}
