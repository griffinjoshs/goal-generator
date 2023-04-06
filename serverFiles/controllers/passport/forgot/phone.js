const { getUserByPhone } = require('../user.controller');

async function sendRecoveryPhoneNumber(req, res) {
  const userPhone = req.body.phone;
  const user = getUserByPhone(userPhone);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  console.log("User data for recovery:", {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    username: user.username,
  });

  res.status(200).json({ message: 'User data retrieved for recovery' });
}

module.exports = {
  sendRecoveryPhoneNumber,
};