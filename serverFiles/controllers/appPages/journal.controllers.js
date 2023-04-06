const path = require('path');

exports.getJournal = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/journal.html'));
};
