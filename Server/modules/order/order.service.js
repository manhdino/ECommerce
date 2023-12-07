const Order = require("../../models/order/order.model");

exports.createOrder = async (userId, cartItems, totalAmount, shippingAddress) => {
    const newOrder = new Order({
        user: userId,
        items: cartItems,
        totalAmount,
        shippingAddress,
    });

    return await newOrder.save();
};

exports.getOrdersByUser = async (userId) => {
    return await Order.find({ user: userId }).populate('items.product');
};

exports.getOrderById = async (orderId) => {
    return await Order.findById(orderId).populate('items.product').select('-__v');
};

exports.updateOrderStatus = async (orderId, newStatus) => {
    return await Order.findByIdAndUpdate(orderId, { status: newStatus }, { new: true });
};
