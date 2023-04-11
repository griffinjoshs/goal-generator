// user.controller.js
const User = require("../../models/user.model");

console.log('User object:', User);

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting user by ID");
  }
};

const getUserByEmail = async (email) => {
  console.log(User); // Add this line
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting user by email");
  }
};

const getUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ where: { username } });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting user by username");
  }
};

const getUserByPhone = async (phone) => {
  try {
    const user = await User.findOne({ where: { phone } });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting user by phone");
  }
};

const getUserByResetToken = async (token) => {
  try {
    console.log("Searching for user with token:", token);
    const user = await User.findOne({ where: { resetPasswordToken: token } });
    console.log("Found user:", user);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting user by reset token");
  }
};

const updateUser = async (updatedUser) => {
  try {
    console.log("Updating user:", updatedUser);
    await updatedUser.save();
    console.log("Updated user:", updatedUser);
  } catch (error) {
    console.error(error);
    throw new Error("Error updating user");
  }
};

const getUserDetails = async (req, res) => {
  console.log("Request user:", req.user);

  if (!req.user) {
    return res.status(400).json({ error: "User not found in request" });
  }

  res.json({
    id: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
    username: req.user.username,
    phone: req.user.phone,
    coins: req.user.coins,
    points: req.user.points,
  });
};

module.exports = {
  getUserByEmail,
  getUserById,
  getUserByUsername,
  getUserByPhone,
  getUserByResetToken,
  updateUser,
  getUserDetails,
};
