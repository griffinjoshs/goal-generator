const express = require('express');
const router = express.Router();
const rewardsController = require('../../controllers/appPages/rewards.controllers');

router.get('/', rewardsController.getRewards);

module.exports = router;
