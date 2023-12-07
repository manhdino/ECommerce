const cartService = require("./cart.service");

exports.getCart = async (req, res) => {
    const userId = req.user._id;

    try {
        const cart = await cartService.getCartByUserId(userId);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addToCart = async (req, res) => {
    const userId = req.user._id;
    const productId = req.body.productId;
    const quantity = req.body.quantity || 1;

    try {
        const updatedCart = await cartService.addToCart(userId, productId, quantity);
        res.json(updatedCart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.removeFromCart = async (req, res) => {
    const userId = req.user._id;
    const productId = req.body.productId;

    try {
        const updatedCart = await cartService.removeFromCart(userId, productId);

        if (!updatedCart) {
            return res.json({ message: 'Product removed, and cart is now empty' });
        }

        res.json(updatedCart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
