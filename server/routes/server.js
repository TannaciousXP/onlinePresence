const express = require('express');
const router = express.Router();
const $ = require('jquery');

// Render home page
router.route('/')
  .get((req, res) => {
    res.render('pages/home.ejs', {
      title: 'Home',
      background: `background-image: url('/assets/photos/home.jpg')`,
    });
  });

// Render about page
router.route('/about')
  .get((req, res) => {
    res.render('pages/about.ejs', {
      title: 'About',
      background: `background-image: url('/assets/photos/about.jpg')`,
    });
  });

// height: `height: $(function(){
//   ($(document).height() - ($(#nav).height() + $(#footer).height()))
// })`
// $('.content').css('height', $(document).height() - ($('.header').height() + $('.footer').height() + `MARGIN TOP OR PADDING`) - $('.contact').height());

// Render projects page
router.route('/projects')
  .get((req, res) => {
    res.render('pages/projects.ejs', {
      title: 'Projects',
      background: `background-image: url('/assets/photos/projects.jpg')`,
    });
  });

// Render blogs page
router.route('/blogs')
  .get((req, res) => {
    res.render('pages/blogs.ejs', {
      title: 'Blogs',
      background: `background-image: url('/assets/photos/blog.jpg')`,
    });
  });

module.exports = router;
