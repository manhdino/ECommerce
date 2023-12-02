const express = require('express');
const router = express.Router();
const cartController = require('./cart.controller');
const { auth, checkRole } = require('../../middleware/auth');

// Routes
router.get('/', auth, checkRole(1), cartController.getCart);
router.post('/add', auth, checkRole(1), cartController.addToCart);
router.post('/remove', auth, checkRole(1), cartController.removeFromCart);

module.exports = router;
