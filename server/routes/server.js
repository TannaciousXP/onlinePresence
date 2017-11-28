const express = require('express');
const router = express.Router();
const $ = require('jquery');

// Render home page
router.route('/')
  .get((req, res) => {
    res.render('pages/projects.ejs', {
      title: 'Projects',
      background: `background-image: url('/assets/photos/projects.jpg')`,
    });
  });

// Render about page
router.route('/experience')
  .get((req, res) => {
    res.render('pages/experience.ejs', {
      title: 'Experience',
      background: `background-image: url('/assets/photos/about2.jpg')`,
    });
  });

// Render projects page
router.route('/about')
  .get((req, res) => {
    res.render('pages/about.ejs', {
      title: 'About',
      background: `background-image: url('/assets/photos/home.jpg')`,
    });
  });

// Render blogs page
router.route('/blogs')
  .get((req, res) => {
    res.render('pages/blogs.ejs', {
      title: 'Blogs',
      background: `background-image: url('/assets/photos/blog2.jpg')`,
    });
  });

module.exports = router;
