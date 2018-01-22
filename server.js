const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('./serverside/services/passport.js');

const app = express();

require('./serverside/routes/authRoutes.js')(app);

const PORT = process.env.PORT || 4000;

//app.use(express.static(path.resolve(__dirname, 'public')));
//app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log('server started');
});


