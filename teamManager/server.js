const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

// Serve it up with angular
app.use(express.static(path.resolve('dist')));

// Parser config
app.use(parser.urlencoded({
  extended: true
}));
app.use(parser.json());

// Bring in data and models
require('./server/config/mongoose');

//Bring in routes
app.use('/api/players', require('./server/config/routes'));

// Catch all
app.use(require('./server/config/catch-all'));


// Setup localhost
app.listen(port, () => console.log(`listening on port ${port}`));
