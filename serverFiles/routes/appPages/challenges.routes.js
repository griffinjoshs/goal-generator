const express = require("express");
const router = express.Router();
const challengesController = require("../../controllers/appPages/challenges.controllers");
const { checkAuthenticated } = require("../../controllers/passport/auth.controller"); 

router.get("/", challengesController.getChallenges);

module.exports = router;
