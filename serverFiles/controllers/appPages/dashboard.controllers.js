const path = require('path')
// Define current date variables
const moment = require('moment');
const currentDate = moment();
const currentDay = currentDate.format('MM-DD-YYYY');
const currentWeek = currentDate.format('WW-YYYY');
const currentMonth = currentDate.format('MM-YYYY');
const currentYear = currentDate.year();

function setWeekView(date) {
  const weekNumber = date.isoWeek();
  const year = date.year();
  const formattedDate = `${weekNumber}-${year}`;
}

setWeekView(currentDate);

exports.getDay = (req, res) => {
  const { date } = req.params;
  const selectedDate = date || currentDay;
  res.sendFile(path.join(__dirname, '../../../public/dashboard.html'), { selectedDate });
};

exports.getWeek = (req, res) => {
  let { weekYear } = req.params;
  weekYear = weekYear || currentWeek;
  res.sendFile(path.join(__dirname, '../../../public/dashboard.html'));
};

exports.getMonth = (req, res) => {
  let { monthYear } = req.params;
  monthYear = currentMonth;
  res.sendFile(path.join(__dirname, '../../../public/dashboard.html'));
};

exports.getYear = (req, res) => {
  let { year } = req.params;
  year = currentYear;
  res.sendFile(path.join(__dirname, '../../../public/dashboard.html'));
};

exports.redirectToDay = (req, res) => {
  res.redirect(`/dashboard/day/${currentDay}`);
};

exports.redirectToWeek = (req, res) => {
  res.redirect(`/dashboard/week/${currentWeek}`);
};

exports.redirectToMonth = (req, res) => {
  res.redirect(`/dashboard/month/${currentMonth}`);
};

exports.redirectToYear = (req, res) => {
  res.redirect(`/dashboard/year/${currentYear}`);
};
