'use strict';
const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));

// Redirect to appropriate page
app.use('/', routes.server);
// Use projects to fetch repos
app.use('/fetch', routes.projects);


module.exports = app;
