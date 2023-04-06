const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const {
  getUserById,
  getUserByEmail,
  getUserByUsername,
  getUserByPhone,
} = require("../controllers/passport/user.controller");

async function initialize(passport) {
  const authenticateUser = async (identifier, password, done) => {
    // Get the user by email, username, or phone number
    const user = getUserByEmail(identifier) || getUserByUsername(identifier) || getUserByPhone(identifier);

    if (user == null) {
      return done(null, false, { message: "No user found with that email, username, or phone number" });
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
  passport.deserializeUser((id, done) => {
    done(null, getUserById(id));
  });
}

module.exports = initialize;
