'use strict';
const express = require('express');
const router = express.Router();
const FitnessController = require('../controllers').Fitness;

router.route('/:user')
  .get(FitnessController.fetchRepos);


module.exports = router;
