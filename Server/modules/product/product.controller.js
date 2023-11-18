const productService = require("./product.service");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await productService.getProductById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProduct = async (req, res) => {
  const productData = req.body;

  try {
    const newProduct = await productService.createProduct(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;

  try {
    const updatedProduct = await productService.updateProduct(productId, productData);

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await productService.deleteProduct(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
