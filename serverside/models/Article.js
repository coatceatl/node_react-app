const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

mongoose.model('articles', articleSchema);
