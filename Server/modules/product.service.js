const Product = require("../models/product.model");

exports.getAllProducts = async () => {
  return await Product.find().populate('category supplier');
};

exports.getProductById = async (productId) => {
  return await Product.findById(productId).populate('category supplier');
};

exports.createProduct = async (productData) => {
  const newProduct = new Product(productData);
  return await newProduct.save();
};

exports.updateProduct = async (productId, productData) => {
  return await Product.findByIdAndUpdate(productId, productData, { new: true });
};

exports.deleteProduct = async (productId) => {
  return await Product.findByIdAndDelete(productId);
};