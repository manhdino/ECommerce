const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    ratings: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    seller: { type: String, required: true },
    quantity: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
