const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

/*
app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

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
*/

