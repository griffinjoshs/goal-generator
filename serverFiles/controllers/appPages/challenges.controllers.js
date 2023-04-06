const path = require('path');

exports.getChallenges = (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/challenges.html'));
  };
  
