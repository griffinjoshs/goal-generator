currentDate = moment().format("YYYY/MM/DD"); // Get the modal element
const addGoalModal = document.getElementById("addGoalModal");
const howLongSelect = document.querySelector('.howLongSelect')

// Create event listener for the shown.bs.modal event
addGoalModal.addEventListener("shown.bs.modal", () => {
  console.log("Modal is shown");
  document.querySelector("#oneDateInput").value = currentDate;
  console.log(currentDate); // This line has been fixed
});

     // Update the how-long h3 text based on the selected pill
     function updateHowLongText() {
      const activePill = document.querySelector("#timeframe-pills-tab .day-select-pill.active");
      const howLongText = activePill.textContent.toLowerCase() === "week" ? "weeks" : "months";
      document.querySelector(".how-long h3").textContent = howLongText;
    }

    updateHowLongText()

// Add a click event listener to the timeframe-pills element
const timeframePills = document.querySelector("#timeframe-pills-tab");

// Add a click event listener to the timeframe-pills element
timeframePills.addEventListener("click", (e) => {
  // Get the pill that was clicked
  const pill = e.target.closest(".day-select-pill");

  // If a pill was clicked, proceed
  if (pill) {
    // Reset selected buttons and count
    resetSelections();

    // Get the ID of the corresponding tab
    const tabId = pill.getAttribute("href");

    // Get the content for the selected tab
    const content = document.querySelector(tabId);

    // Activate the selected pill and deactivate the others
    timeframePills.querySelectorAll(".day-select-pill").forEach((link) => {
      if (link === pill) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Show the selected tab and hide the others
    content.parentElement.querySelectorAll(".tab-pane").forEach((pane) => {
      if (pane === content) {
        pane.classList.add("show", "active");
      } else {
        pane.classList.remove("show", "active");
      }
    });

    // Call the updateHowLongText() function after updating the pill selection
    updateHowLongText();
  }
});


const goalsByMonth = document.getElementById("goalsByMonth");

function createMonthButtons() {
  for (let i = 1; i <= 31; i++) {
    const button = document.createElement("button");
    button.classList.add("choose-days-btn", "monthday-button", "weekOrMonthDay");
    button.setAttribute("type", "button"); // Add the type attribute
    button.textContent = i;

    goalsByMonth.appendChild(button);

    if (i % 7 === 0) {
      const breakElement = document.createElement("br");
      goalsByMonth.appendChild(breakElement);
    }
  }
}

createMonthButtons();

const dayButtons = document.querySelectorAll(".weekOrMonthDay");
let selectedCount = 0;

function resetSelections() {
  dayButtons.forEach((button) => {
    button.classList.remove("bg-primary");
  });
  selectedCount = 0;
  document.querySelector(".how-long-select").selectedIndex = 0;
}

dayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("bg-primary")) {
      button.classList.remove("bg-primary");
      selectedCount--;
    } else if (selectedCount < 7) {
      button.classList.add("bg-primary");
      selectedCount++;
    }
  });
});


const multipleGoalsSwitch = document.getElementById("multipleGoalsSwitch");
const doItOnce = document.getElementById("doItOnce");
const doItMultiple = document.getElementById("doItMultiple");

function updateGoalVisibility() {
  resetSelections();
  if (multipleGoalsSwitch.checked) {
    doItOnce.classList.add("hide");
    doItMultiple.classList.remove("hide");
  } else {
    doItOnce.classList.remove("hide");
    doItMultiple.classList.add("hide");
  }
}

function updateProgressBar(percentage) {
  const progressBar = document.getElementById("smartPercentage");
  const recommendations = document.querySelector('.recommendations')
  // Set the aria-valuenow attribute to the passed percentage value
  progressBar.setAttribute("aria-valuenow", percentage);

  // Update the width of the progress bar to match the aria-valuenow value
  progressBar.style.width = `${percentage}%`;
  progressBar.textContent = `${percentage}%`;

  // Remove existing background classes
  progressBar.classList.remove("bg-danger", "bg-warning", "bg-success");

  // Add the appropriate background class based on the percentage value
  if (percentage < 50) {
    progressBar.classList.add("bg-danger");
    recommendations.textContent = 'what the hell is that?'
  } else if (percentage >= 50 && percentage < 80) {
    progressBar.classList.add("bg-warning");
    recommendations.textContent = 'Not smart enough'
  } else if (percentage >= 80) {
    progressBar.classList.add("bg-success");
    recommendations.textContent = 'Very Specific'
  }
}

// Call the updateProgressBar function to set the initial styles
updateProgressBar(85);

multipleGoalsSwitch.addEventListener("change", updateGoalVisibility);

// Initialize the visibility based on the initial value
updateGoalVisibility();

