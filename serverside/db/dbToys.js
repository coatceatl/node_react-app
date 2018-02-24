const mongoose = require('mongoose');
const Article = require('../models/Article');

mongoose.connect('mongodb://localhost:27017/funny_toys_demo');

const product = [
  new Article({
    id: 1,
    title: 'Sleepy Foxy',
    description: 'Crochet Toy Amigurumi Sleepy Fox',
    price: 85
  }),
  new Article({
    id: 2,
    title: 'Mint Cat',
    description: 'Crochet Toy Amigurumi Mint Cat',
    price: 85,
  }),
  new Article({
    id: 3,
    title: 'Violet Doll',
    description: 'Crochet Toy Amigurumi Violet Pups',
    price: 130
  }),
  new Article({
    id: 4,
    title: 'Unicorn',
    description: 'Crochet Toy Amigurumi Unicorn',
    price: 145
  }),
  new Article({
    id: 5,
    title: 'Totoro',
    description: 'Crochet Toy Amigurumi Totoro',
    price: 370
  }),
  new Article({
    id: 6,
    title: 'White Lamb',
    description: 'Crochet Toy Amigurumi White Lamb',
    price: 120
  }),
  new Article({
    id: 7,
    title: 'Koala',
    description: 'Crochet Toy Amigurumi Koala',
    price: 85
  }),
  new Article({
    id: 8,
    title: 'Giraffe',
    description: 'Crochet Toy Amigurumi Cute Giraffe',
    price: 85
  }),
  new Article({
    id: 9,
    title: 'Violet Cow',
    description: 'Crochet Toy Amigurumi Violet Cow',
    price: 85
  })
];

for (i=0; i < product.length; i++) {
  product[i].save();
}

module.exports =  product;
