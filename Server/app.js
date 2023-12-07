require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const auth = require("./modules/auth/auth.route");
const product = require("./modules/product/product.route");
const user = require("./modules/user/user.route");
const cart = require("./modules/cart/cart.route");
const order = require("./modules/order/order.route");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/auth", auth);
app.use("/product", product);
app.use("/user", user);
app.use("/cart", cart);
app.use("/order", order);

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI_DINOMANH;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Kết nối đến MongoDB thành công");
  })
  .catch((err) => {
    console.error("Kết nối đến MongoDB thất bại", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = app;
