// passportConfig.js
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const User = require("../models/user.model");
const { getUserByEmail, getUserByUsername, getUserByPhone } = require("../controllers/passport/user.controller");

async function initialize(passport) {
  const authenticateUser = async (identifier, password, done) => {
    const user = await getUserByEmail(identifier) || await getUserByUsername(identifier) || await getUserByPhone(identifier);

    if (user == null) {
      return done(null, false, {
        message: "No user found with that email, username, or phone number",
      });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (error) {
      return done(error);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "identifier" }, authenticateUser));
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    const user = await User.findByPk(id);
    done(null, user);
  });
}

module.exports = initialize;