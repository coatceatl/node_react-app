const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
  title: String,
  description: String,
  price: Number,
});

mongoose.model('articles', articleSchema);
