const express = require('express');
const router = express.Router();
const { sendRecoveryEmail } = require('../../controllers/passport/forgot/email');
const { sendRecoveryPhoneNumber } = require('../../controllers/passport/forgot/phone');

router.post('/email', sendRecoveryEmail);
router.post('/phone', sendRecoveryPhoneNumber);

module.exports = router;
