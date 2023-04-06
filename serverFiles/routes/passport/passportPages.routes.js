const express = require("express");
const router = express.Router();
const path = require("path");
const {
  checkAuthenticated,
  checkNotAuthenticated,
} = require("../../controllers/passport/auth.controller");

router.get("/login", checkNotAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "../../../public/login.html"));
});

router.get("/register", checkNotAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "../../../public/register.html"));
});

router.get("/forgot", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../public/forgot.html"));
});

router.get("/navbar", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../public/navbar.html"));
});

module.exports = router;
