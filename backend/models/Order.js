const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    books: [{ book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' }, quantity: { type: Number, required: true } }],
    total: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
