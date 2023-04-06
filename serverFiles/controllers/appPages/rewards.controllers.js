const path = require('path');

exports.getRewards = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/rewards.html'));
};
