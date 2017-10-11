const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.render('pages/home.ejs');
  });

routher.route('/about')
  .get((req, res) => {
    res.render('pages/about.ejs');
  });

router.route('/projects')
  .get((req, res) => {
    res.render('pages/projects.ejs');
  });

module.exports = router;