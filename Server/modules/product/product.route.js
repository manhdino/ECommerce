const express = require('express');
const router = express.Router();
const productController = require('./product.controller');
const { auth, checkRole} = require('../../middleware/auth');

// Routes
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', auth, checkRole(2), productController.createProduct);
router.put('/:id', auth, checkRole(2), productController.updateProduct);
router.delete('/:id', auth, checkRole(2), productController.deleteProduct);

module.exports = router;
