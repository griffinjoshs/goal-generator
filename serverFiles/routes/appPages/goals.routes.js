const express = require('express');
const router = express.Router();
const goalsController = require('../../controllers/appPages/goals.controllers');

router.get('/', goalsController.getGoals);

module.exports = router;
