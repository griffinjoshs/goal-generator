const express = require("express");
const router = express.Router();
const path = require("path");
const {
  checkAuthenticated,
  checkNotAuthenticated,
  loginUser,
  registerUser,
  logoutUser,
  redirectToDashboard,
} = require("../../controllers/passport/auth.controller");

router.get("/", checkAuthenticated, redirectToDashboard);

router.get("/", checkNotAuthenticated, (req, res) => {
  res.redirect("/login");
});

router.post("/login", checkNotAuthenticated, loginUser);

router.post("/register", checkNotAuthenticated, registerUser);

router.delete("/logout", logoutUser);

module.exports = router;
