const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {//Role: 1. Chưa kích hoạt, 2. Người dùng, 3: Admin
        type: Number,
        enum: [1, 2, 3],
        default: 1 
    },
    avatar: {
        type: String
    },
},{
    timestamps: true,
});

UserSchema.plugin(mongoosePaginate);

module.exports = User = mongoose.model('User', UserSchema);