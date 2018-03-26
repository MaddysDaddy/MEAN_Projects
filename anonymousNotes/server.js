const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

// Establish App
const app = express();

// Setup parser
app.use(parser.urlencoded({
  extended: true
}));
app.use(parser.json());

// Data connection and models
require('./server/config/mongoose');

// Connect to angular dist directory
//app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.resolve('dist')));

// Get routes
//require('./server/config/routes')(app);
app.use('/api/notes', require('./server/config/routes'));

// Catch all
app.use(require('./server/config/catch-all'));

// Setup localhost
app.listen(port, () => console.log(`listening on port: ${port}`));
