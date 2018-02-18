const express       = require('express');
const mongoose      = require('mongoose');
const cookieSession = require('cookie-session');
const passport      = require('passport');
const path          = require('path');
const bodyParser    = require('body-parser');
const keys          = require('./serverside/config/keys');
require('./serverside/models/User');
require('./serverside/models/Article');
require('./serverside/db/dbToys.js');
require('./serverside/services/passport.js');

mongoose.connect('mongodb://localhost:27017/funny_toys_demo', (err) => {
  if (err) throw err;
  console.log('successfully connected');
});

const app = express();
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./serverside/routes/authRoutes.js')(app);
require('./serverside/routes/orderRoutes.js')(app);

app.use(express.static('public'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('server started');
});


