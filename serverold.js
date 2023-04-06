const express = require("express");
const app = express();
const PORT = process.env.PORT || 9800;
const moment = require("moment");

// Define current date variables
const currentDate = moment();
const currentDay = currentDate.format('MM-DD-YYYY');
const currentWeek = currentDate.format("WW-YYYY");
const currentMonth = currentDate.format('MM-YYYY');
const currentYear = currentDate.year();

function setWeekView(date) {
  const weekNumber = date.isoWeek();
  const year = date.year();
  const formattedDate = `${weekNumber}-${year}`;
}

setWeekView(currentDate);

app.get("/current-date", (req, res) => {
  const currentDate = moment();
  res.send(currentDate.toISOString());
});

app.get('/dashboard/day/:date', (req, res) => {
  const { date } = req.params;
  const selectedDate = date || currentDay;
  res.sendFile(__dirname + "/public/dashboard.html", { selectedDate });
});

app.get("/dashboard/week/:weekYear", (req, res) => {
  let { weekYear } = req.params;
  weekYear = weekYear || currentWeek;
  res.sendFile(__dirname + "/public/dashboard.html");
});

app.get("/dashboard/month/:monthYear", (req, res) => {
  let { monthYear } = req.params;
    monthYear = currentMonth;
  res.sendFile(__dirname + "/public/dashboard.html");
});

app.get("/dashboard/year/:year", (req, res) => {
  let { year } = req.params;
    year = currentYear;
  res.sendFile(__dirname + "/public/dashboard.html");
});

app.get('/dashboard/day/', (req, res) => {
  res.redirect(`/dashboard/day/${currentDay}`);
});

app.get('/dashboard/week/', (req, res) => {
  res.redirect(`/dashboard/week/${currentWeek}`);
});

app.get('/dashboard/month/', (req, res) => {
  res.redirect(`/dashboard/month/${currentMonth}`);
});

app.get('/dashboard/year/', (req, res) => {
  res.redirect(`/dashboard/year/${currentYear}`);
});


// Serve static files from the public directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json("this is working and will be something");
});

require('./routes/dashboard.routes')(app)


// Render the index page for the root route
// app.get("/", (req, res) => {
//   res.render("index");
// });

// Start the server
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
