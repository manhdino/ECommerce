const Cart = require("../../models/cart/cart.model");

exports.getCartByUserId = async (userId) => {
    return await Cart.findOne({ user: userId }).populate('items.product');
};

exports.addToCart = async (userId, productId, quantity = 1) => {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
        const newCart = new Cart({
            user: userId,
            items: [{ product: productId, quantity }],
        });
        return await newCart.save();
    }

    const existingItemIndex = cart.items.findIndex(item => item.product.equals(productId));

    if (existingItemIndex !== -1) {
        cart.items[existingItemIndex].quantity = quantity;
    } else {
        cart.items.push({ product: productId, quantity });
    }

    return await cart.save();
};

exports.removeFromCart = async (userId, productId, quantityToRemove = 1) => {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
        return null;
    }

    const cartItem = cart.items.find(item => item.product.equals(productId));

    if (!cartItem) {
        return null;
    }

    if (quantityToRemove >= cartItem.quantity) {
        cart.items = cart.items.filter(item => !item.product.equals(productId));
    } else {
        cartItem.quantity -= quantityToRemove;
    }

    if (cart.items.length === 0) {
        await Cart.findByIdAndDelete(cart._id);
        return null;
    }

    return await cart.save();
};