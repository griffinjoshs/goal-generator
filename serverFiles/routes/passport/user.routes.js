const express = require("express");
const router = express.Router();
const { checkAuthenticated } = require("../../controllers/passport/auth.controller");
const { getUserDetails } = require("../../controllers/passport/user.controller");

router.get("/", checkAuthenticated, (req, res, next) => {
    console.log("Inside /user route"); // Add this log
    next();
  }, getUserDetails);
  
module.exports = router;
