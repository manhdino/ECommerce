require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

const product = require("./modules/product/product.route");
const user = require("./modules/user/user.route")

const app = express();

app.use("/product", product);
app.use("/user", user);

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Kết nối đến MongoDB thành công');
    })
    .catch((err) => {
        console.error('Kết nối đến MongoDB thất bại', err);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
module.exports = app;