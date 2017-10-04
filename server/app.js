'use strict';
const express = require('express');
const path = require('path');
// const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expres.static(__dirname + '../client/dist/public'));

const PORT = 3000;

app.listen(PORT, () => {
  console.log('PXT app listening on port ' + PORT);
});


module.exports = app;
