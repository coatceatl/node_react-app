const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imagePath: String
});

const Article = mongoose.model('articles', articleSchema);

module.exports = Article;


/*
const VioletDoll = new Article ({
  title: 'Violet Doll',
  description: 'Very cute doll',
  price: 11
});
VioletDoll.save();
*/
