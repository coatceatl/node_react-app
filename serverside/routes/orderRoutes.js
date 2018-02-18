const mongoose = require('mongoose');
const article = require('../db/dbToys.js');

module.exports = app => {
  app.get('/api/orders', (req, res) => {
    console.log('this is a file orderRoutes');
    res.send(article);
  });

//  app.post('/api/orders', (req, res) => {
  //  const 
 // });


  /*
  app.post('/api/orders', requireLogin, (req, res) => {
    const { title, description, price } = req.body;

    const article = new Article({
    title,
    description,
    price,
    _user: req.user.id});
  });
};

  */

}

