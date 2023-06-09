const { sendEmail } = require('../../../config/mailerConfig');
const User = require("../../../models/user.model");
const crypto = require('crypto');

async function sendRecoveryEmail(req, res) {
  const userEmail = req.body.email;
  const user = await User.findOne({ where: { email: userEmail } });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const resetPasswordToken = crypto.randomBytes(20).toString('hex');
  user.resetPasswordToken = resetPasswordToken;
  user.resetPasswordExpires = Date.now() + 6000000;

  console.log("Created token:", resetPasswordToken);
  console.log("Token expiration:", user.resetPasswordExpires);
  console.log("Current time:", Date.now());

  console.log(resetPasswordToken)

  const forgotMailOptions = {
    from: process.env.APP_EMAIL,
    to: userEmail,
    subject: 'Account Recovery',
    text: `Hello ${user.firstName} ${user.lastName},
    \n\nYou requested to reset your password. Please click on the following link, or copy and paste it into your browser to complete the process:\n
    http://localhost:9810/reset-password/${user.id}/${resetPasswordToken}\n\n
    If you did not request this, please ignore this email and your password will remain unchanged.\n\n
    Best Regards,\nYour Website Team`,
  };

  const emailSent = await sendEmail(forgotMailOptions);
  if (emailSent) {
    await user.save();
    res.status(200).json({ message: 'Recovery email sent' });
  } else {
    res.status(500).json({ message: 'Failed to send recovery email' });
  }
}

module.exports = {
  sendRecoveryEmail,
};
