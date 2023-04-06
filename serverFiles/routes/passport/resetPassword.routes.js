const express = require("express");
const router = express.Router();
const path = require("path");
const { handleResetPassword, generateResetToken } = require("../../controllers/passport/resetPassword.controller");
const { checkNotAuthenticated } = require("../../controllers/passport/auth.controller");

router.get("/:userId/:token", checkNotAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "reset-password.html"));
});

router.put("/:userId/:token", checkNotAuthenticated, handleResetPassword);

module.exports = router;
