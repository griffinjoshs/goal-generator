const express = require("express");
const router = express.Router();
const challengesController = require("../../controllers/appPages/challenges.controllers");

router.get("/", challengesController.getChallenges);

module.exports = router;
