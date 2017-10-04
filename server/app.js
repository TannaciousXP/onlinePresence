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

app.use(express.static(__dirname + '../client/dist/public'));

module.exports = app;