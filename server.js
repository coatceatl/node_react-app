const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
require('./serverside/models/User');
require('./serverside/services/passport.js');

mongoose.connect('mongodb://localhost:27017/users');

const app = express();

require('./serverside/routes/authRoutes.js')(app);

const PORT = process.env.PORT || 4000;

//app.use(express.static(path.resolve(__dirname, 'public')));
//app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log('server started');
});


