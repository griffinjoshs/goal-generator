const express = require('express');
const router = express.Router();
const journalController = require('../../controllers/appPages/journal.controllers');

router.get('/', journalController.getJournal);

module.exports = router;
