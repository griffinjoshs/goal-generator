const passport = require("passport");
const bcrypt = require("bcrypt");
const { User, users } = require("../../models/user.model");

function checkAuthenticated(req, res, next) {
  console.log("Checking authentication");
  console.log("Session ID:", req.sessionID);
  console.log("Session data:", req.session);
  console.log("Is authenticated?", req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/dashboard/day");
  }
  next();
}

async function loginUser(req, res, next) {
  passport.authenticate("local", async (err, user, info) => {
    try {
      if (err) {
        console.error("Error during login:", err);
        return next(err);
      }
      if (!user) {
        console.log("Login failed:", info.message);
        return res.status(401).json({ message: info.message });
      }
      await req.logIn(user, (err) => {
        if (err) {
          console.error("Error during login:", err);
          return next(err);
        }
        console.log("User logged in:", user);
        return res.redirect("/dashboard/day");
      });
    } catch (error) {
      console.error("Error in login route:", error);
      return next(error);
    }
  })(req, res, next);
}

async function registerUser(req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = {
      id: Date.now().toString(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
      phone: req.body.phone,
    };
    users.push(newUser);
    console.log("User registered:", newUser);
    res.redirect("/login");
  } catch (error) {
    console.error("Error registering user:", error);
    res.redirect("/register");
  }
}

function logoutUser(req, res, next) {
  try {
    console.log("User logged out:", req.user);
    req.logout(() => {
      res.redirect("/login");
    });
  } catch (error) {
    console.error("Error in logout route:", error);
    return next(error);
  }
}

function redirectToDashboard(req, res) {
  res.redirect("/dashboard/day");
}

module.exports = {
  checkAuthenticated,
  checkNotAuthenticated,
  loginUser,
  registerUser,
  logoutUser,
  redirectToDashboard,
};
