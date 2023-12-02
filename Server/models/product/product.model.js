const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    size: { type: String },
    color: { type: String },
    stockQuantity: { type: Number },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
},{
    timestamps: true,
}
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
