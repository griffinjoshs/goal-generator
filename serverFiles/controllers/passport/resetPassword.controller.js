const { getUserById, updateUser } = require("./user.controller");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

async function handleResetPassword(req, res) {
  try {
    const userId = req.params.userId;
    const token = req.params.token;
    const newPassword = req.body.password;

    const user = await getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the provided token matches the stored token and if it's still valid
    if (
      user.resetPasswordToken === token &&
      user.resetPasswordExpires > new Date()
    ) {
      // Update the user's password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      user.resetPasswordToken = null;
      user.resetPasswordExpires = null;
      await user.save();

      // Send a success response
      return res.status(200).json({ message: "Password reset successful" });
    } else {
      // Send an error response for invalid or expired token
      return res
        .status(400)
        .json({ error: "Invalid or expired token" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  handleResetPassword,
};
