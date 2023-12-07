const express = require('express');
const router = express.Router();
const orderController = require('./order.controller');
const { auth, checkRole } = require('../../middleware/auth');

// Routes
router.post('/', auth, checkRole(1), orderController.createOrder);
router.get('/', auth, checkRole(1), orderController.getOrdersByUser);
router.get('/:id', auth, checkRole(1), orderController.getOrderById);
router.put('/:id/status', auth, checkRole(2), orderController.updateOrderStatus);

module.exports = router;
