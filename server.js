const express = require("express");
const app = express();
const PORT = process.env.PORT || 9810;
const bodyParser = require("body-parser");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");

if (process.env.NODE_ENV !== "productive") {
  require("dotenv").config();
}

const initializePassport = require("./serverFiles/config/passportConfig");

initializePassport(passport);

app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

// Serve static files from the public directory
app.use(express.static("public"));

// Middleware to set the correct MIME type for JavaScript files
app.use((req, res, next) => {
  if (req.path.endsWith('.js')) {
    res.set('Content-Type', 'application/javascript');
  }
  next();
});

app.get("/admin", (req, res) => {
  res.json({ message: "Working!!!!!!" });
});

// Move the root route ("/") before any other route
app.use("/", require("./serverFiles/routes/passport/auth.routes"));

// Require the dashboard routes and use them with the /dashboard prefix
app.use("/dashboard", require("./serverFiles/routes/appPages/dashboard.routes"));
app.use("/journal", require("./serverFiles/routes/appPages/journal.routes"));
app.use(
  "/challenges",
  require("./serverFiles/routes/appPages/challenges.routes")
);
app.use("/goals", require("./serverFiles/routes/appPages/goals.routes"));
app.use("/rewards", require("./serverFiles/routes/appPages/rewards.routes"));

app.use(require('./serverFiles/routes/passport/passportPages.routes'));
app.use("/user", require("./serverFiles/routes/passport/user.routes"));
app.use("/forgot", require("./serverFiles/routes/passport/forgot.routes"));
app.use("/reset-password", require("./serverFiles/routes/passport/resetPassword.routes"));
// app.use('/api/goals',require('./serverFiles/routes/api.routes'));

// Start the server
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
