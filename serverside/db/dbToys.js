const mongoose = require('mongoose');
const Article = require('../models/Article');

mongoose.connect('mongodb://localhost:27017/funny_toys_demo');

const article = [
  new Article({
    title: 'Sleepy Foxy',
    description: 'Crochet Toy Amigurumi Sleepy Fox',
    price: 85
  }),
  new Article({
    title: 'Mint Cat',
    description: 'Crochet Toy Amigurumi Mint Cat',
    price: 85
  }),
  new Article({
    title: 'Violet Doll',
    description: 'Crochet Toy Amigurumi Violet Doll',
    price: 130
  }),
  new Article({
    title: 'Unicorn',
    description: 'Crochet Toy Amigurumi Unicorn',
    price: 145
  }),
  new Article({
    title: 'Totoro',
    description: 'Crochet Toy Amigurumi Totoro',
    price: 370
  }),
  new Article({
    title: 'White Lamb',
    description: 'Crochet Toy Amigurumi White Lamb',
    price: 120
  })
];

for (i=0; i < article.length; i++) {
  article[i].save();
}

