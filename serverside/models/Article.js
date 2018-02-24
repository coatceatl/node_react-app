const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  imagePath: String
});

const Article = mongoose.model('articles', articleSchema);

module.exports = Article;


