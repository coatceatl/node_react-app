const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
  title: String,
  description: String,
  price: Number,
});

const Article = mongoose.model('articles', articleSchema);

const mintCat = new Article ({
  title: 'Mint Cat',
  description: 'Very cute kitty',
  price: 10
});
