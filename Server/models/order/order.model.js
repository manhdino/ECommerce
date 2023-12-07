const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
});

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [OrderItemSchema],
    totalAmount: { type: Number, required: true },
    shippingAddress: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Processing', 'Shipped', 'Cancelled'], default: 'Pending' },
}, { timestamps: true });

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
