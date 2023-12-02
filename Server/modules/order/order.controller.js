const orderService = require("./order.service");

exports.createOrder = async (req, res) => {
    const userId = req.user._id;
    const cartItems = req.body.cartItems;
    const totalAmount = req.body.totalAmount;
    const shippingAddress = req.body.shippingAddress;

    try {
        const newOrder = await orderService.createOrder(userId, cartItems, totalAmount, shippingAddress);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.getOrdersByUser = async (req, res) => {
    const userId = req.user._id;

    try {
        const orders = await orderService.getOrdersByUser(userId);
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getOrderById = async (req, res) => {
    const orderId = req.params.id;

    try {
        const order = await orderService.getOrderById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    const orderId = req.params.id;
    const newStatus = req.body.status;

    try {
        const updatedOrder = await orderService.updateOrderStatus(orderId, newStatus);
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(updatedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
