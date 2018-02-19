const mongoose = require('mongoose');
//const article = require('../db/dbToys.js');
const Article = require('../models/Article.js');

const Giraffe = new Article ({
  title: 'Giraffe',
  description: 'Very cute doll',
  price: 10
});


module.exports = app => {
  app.get('/api/orders', (req, res) => {
    console.log('this is a file orderRoutes');
    res.send(Giraffe);
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


