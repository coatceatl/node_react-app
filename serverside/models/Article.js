const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
  title: String,
  description: String,
  price: Number,
});

const Article = mongoose.model('articles', articleSchema);

const MintCat = new Article ({
  title: 'Mint Cat',
  description: 'Very cute kitty',
  price: 10
});
MintCat.save(function (err) {
  if (err) throw err;
  console.log('Mint Cat successfully saved');
});

//mongoose.model('articles', articleSchema);

