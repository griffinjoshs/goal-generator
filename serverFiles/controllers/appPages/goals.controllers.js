const path = require('path');

exports.getGoals = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/goals.html'));
};
