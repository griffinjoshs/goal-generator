const { User, users } = require("../../models/user.model");

const getUserByEmail = (email) => users.find((user) => user.email === email);
const getUserById = (id) => users.find((user) => user.id === id);
const getUserByUsername = (username) => users.find((user) => user.username === username);
const getUserByPhone = (phone) => users.find((user) => user.phone === phone);

async function getUserByResetToken(token) {
  console.log("Searching for user with token:", token); // log the token being searched
  console.log("Users:", users); // log the users array
  const user = users.find((user) => user.resetPasswordToken === token);
  console.log("Found user:", user); // log the found user
  return user;
}

const updateUser = (updatedUser) => {
  const index = users.findIndex((user) => user.id === updatedUser.id);
  if (index !== -1) {
    console.log("Updating user:", users[index]); // log the user before update
    users[index] = updatedUser;
    console.log("Updated user:", users[index]); // log the user after update
  }
};

function getUserDetails(req, res) {
  console.log("Request user:", req.user); // log the request user

  if (!req.user) {
    return res.status(400).json({ error: "User not found in request" });
  }

  res.json({
    id: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
    username: req.user.username,
    phone: req.user.phone
  });
}

module.exports = {
  getUserById,
  getUserByEmail,
  getUserByUsername,
  getUserByPhone,
  getUserByResetToken,
  getUserDetails,
  updateUser, 
};


