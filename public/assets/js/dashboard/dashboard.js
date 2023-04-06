let currentDate;

const dashColumn = document.querySelector(".dash-column");

document.querySelectorAll(".prev-btn, .next-btn").forEach((btn) => {
  // Set arrow icons for buttons
  if (btn.classList.contains("prev-btn")) {
    btn.innerHTML = '<i class="fas fa-arrow-left"></i>';
  } else {
    btn.innerHTML = '<i class="fas fa-arrow-right"></i>';
  }

  // Add event listener for button clicks
  btn.addEventListener("click", () => {
    const currentUrl = window.location.href;
    const match = currentUrl.match(/\/dashboard\/(day|week|month|year)\/([\w-]+)/);
    if (match) {
      const viewType = match[1];
      const value = match[2];
      let date = null;
      let newUrl = "";

      switch (viewType) {
        case "day":
          date = moment(value, "MM-DD-YYYY");
          btn.classList.contains("prev-btn") ? date.subtract(1, "day") : date.add(1, "day");
          newUrl = currentUrl.replace(match[0], `/dashboard/day/${date.format("MM-DD-YYYY")}`);
          break;
        case "week":
          date = moment(value, "WW-YYYY");
          btn.classList.contains("prev-btn") ? date.subtract(1, "week") : date.add(1, "week");
          newUrl = currentUrl.replace(match[0], `/dashboard/week/${date.format("WW-YYYY")}`);
          break;
        case "month":
          date = moment(value, "MM-YYYY");
          btn.classList.contains("prev-btn") ? date.subtract(1, "month") : date.add(1, "month");
          newUrl = currentUrl.replace(match[0], `/dashboard/month/${date.format("MM-YYYY")}`);
          break;
        case "year":
          date = moment(value, "YYYY");
          btn.classList.contains("prev-btn") ? date.subtract(1, "year") : date.add(1, "year");
          newUrl = currentUrl.replace(match[0], `/dashboard/year/${date.format("YYYY")}`);
          break;
      }
      
      window.location.href = newUrl;
      updateView(viewType, date);
    }
  });
});

function updateView(viewType, date) {
  switch (viewType) {
    case "day":
      setDayView(date);
      break;
    case "week":
      setWeekView(date);
      break;
    case "month":
      setMonthView(date);
      break;
    case "year":
      setYearView(date);
      break;
  }
}

// Functions to render the views
function setDayView(date) {
  console.log(date)
  console.log(date.format("MM/DD/YYYY"))
  const formattedDate = date.format("dddd, <br> MMMM D, YYYY");
  const selectedDate = document.querySelector("#day-view .selected-date");
  
  console.log("Formatted date:", formattedDate);
  console.log("Selected date element:", selectedDate);
  if (selectedDate) {
    console.log("Updating selected date text content");
    selectedDate.innerHTML = formattedDate;
    displayCurrentDay(date)
  } else {
    console.log("Selected date element not found");
  }
}

function setWeekView(date) {
  const weekNumber = moment(date).isoWeek(); 
  const year = moment(date).year();
  let weekInfo = weekNumber + ', ' + year
  console.log(weekInfo)
  displayCurrentWeek(date)
  const weeksLeft = moment(date).isoWeeksInYear() - weekNumber;
  const formattedDate = `Week ${weekNumber} <br> ${weeksLeft} weeks left in the year`;
  const selectedDate = document.querySelector("#week-view .selected-date");
  selectedDate.innerHTML = formattedDate;
}  

function setMonthView(date) {
  let monthInfo = moment(date).format("MM, YYYY");
  console.log(monthInfo)
  displayCurrentMonth(date)
  const formattedDate = moment(date).format("MMMM, YYYY");
  const selectedDate = document.querySelector("#month-view .selected-date");
  selectedDate.textContent = formattedDate;
}

function setYearView(date) {
  console.log(date)
const year = date.year();
displayCurrentYear(date)
const formattedDate = `${year}`;
const selectedDate = document.querySelector("#year-view .selected-date");
selectedDate.textContent = formattedDate;
}

function updateCurrentView() {
  const currentUrl = window.location.href;
  const match = currentUrl.match(/\/dashboard\/(day|week|month|year)\/([\w-]+)/);
  if (match) {
    const viewType = match[1];
    const value = match[2];
    let date = null;

    switch (viewType) {
      case "day":
        date = moment(value, "MM-DD-YYYY");
        break;
      case "week":
        date = moment().year(value.split("-")[1]).isoWeek(value.split("-")[0]);
        break;
      case "month":
        date = moment().year(value.split("-")[1]).month(value.split("-")[0] - 1);
        break;
      case "year":
        date = moment().year(value);
        break;
    }

    updateView(viewType, date);
  }
}

// Call the updateCurrentView function when the page loads
updateCurrentView();






    
    
    

       
    
   
    
  
