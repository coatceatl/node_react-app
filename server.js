const express = require('express');
const path = require('path');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bodyParser = require('body-parser');
const keys = require('./serverside/config/keys.js');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.json());

passport.use(
  new GoogleStrategy(
    {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    },
    (accessToken) => {
    console.log(accessToken);
}));

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));
/*
app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});
*/

app.post('/signin', (req, res) => {
  var email   =req.body.email;
  var password=req.body.password;
  user.validateSignIn(email, password, (result) => {
    if(result) {
      res.send('success');
    }
    else {
      res.send('Wrong username pass');
    }
  });
});

app.listen(PORT, () => {
  console.log('server started');
});


