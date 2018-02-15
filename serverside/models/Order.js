const mongoosw = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  name: String,
  category: String,
  price: Number
});

mongoose.model('orders', orderSchema);
