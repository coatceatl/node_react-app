{/*
const mongoose = require('mongoose');

const requireLogin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!'});
  }
  next();
};

const Article = mongoose.model('articles');

module.exports = app => {
  app.post('/api/orders', requireLogin, (req, res) => {
    const { title, description, price } = req.body;

    const article = new Article({
    title,
    description,
    price,
    _user: req.user.id});
  });
};
*/}
