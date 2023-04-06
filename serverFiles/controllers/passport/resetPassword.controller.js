const { getUserById, updateUser } = require("./user.controller");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

async function handleResetPassword(req, res) {
  console.log(req.body);
  console.log('handleResetPassword userId:', req.params.userId);
  console.log('handleResetPassword token:', req.params.token);

  const { userId, token } = req.params;
  console.log(`User ID: ${userId}, Token: ${token}`);

  const user = await getUserById(userId);
  console.log("User:", user);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (token !== user.resetPasswordToken) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }

  if (user.resetPasswordExpires < Date.now()) {
    return res.status(400).json({ message: "Token has expired" });
  }

  const { password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user.password = hash;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await updateUser(user);
    console.log("User updated:", user);
    res.status(200).json({ message: "Password reset successful" });
  } catch (err) {
    console.log("Error updating user:", err);
    res.status(500).json({ message: "Failed to reset password" });
  }  
}


module.exports = {
  handleResetPassword,
};
