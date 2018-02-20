const mongoose = require('mongoose');
const { Schema } = mongoose;
//const CartItem = require('./CartItem');

const orderSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  cart: {type: Object, required: true}
});

const Order = mongoose.model('orders', orderSchema);

module.exports = Order;
