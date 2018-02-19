const mongoose = require('mongoose');
const product = require('../db/dbToys.js');
const Article = require('../models/Article.js');

const Giraffe = new Article ({
  title: 'Giraffe',
  description: 'Very cute doll',
  price: 10
});


module.exports = app => {
  app.get('/api/orders', (req, res) => {
    console.log(product[1]);
    res.send(product[4]);
  });

  app.post('/api/orders', (req, res) => {
    console.log(req.body);
    res.send({
      type: 'POST',
      name: req.body.name
    });
  });
}

  /*
  app.post('/api/orders', requireLogin, (req, res) => {
    const { title, description, price } = req.body;

    const article = new Article({
    title,
    description,
    price,
    _user: req.user.id});
  });
  article.save();
};

  */


