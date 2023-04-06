// dailyview navtab bar (today, this week, this month, this year)
const pills = document.querySelectorAll(".nav-pills .nav-link");

const displayCurrentDay = (date) => {
    console.log(date)
document.querySelector('.day-content').classList.remove('hide')

    pills.forEach((pill) => {
      pill.addEventListener("click", (e) => {
        e.preventDefault();
        const pillId = pill.getAttribute("href");
        const pillContent = document.querySelector(pillId);
        const activePills = document.querySelectorAll(
          ".nav-pills .nav-link.active"
        );
        activePills.forEach((activePill) =>
          activePill.classList.remove("active")
        );
        pill.classList.add("active");
        Array.from(document.querySelectorAll(".tab-pane")).forEach(
          (tabPane) => (tabPane.style.display = "none")
        );
        pillContent.style.display = "block";
      });
    });

        // Dynamically generate the data based on the selected date
        const morning = document.querySelector(".morning");
        const noon = document.querySelector(".noon");
        const night = document.querySelector(".night");
        
        // You can replace the sample data below with your actual data
        morning.innerHTML = `<p>Morning schedule for ${date.format("dddd, MMMM D, YYYY")}</p>`;
        noon.innerHTML = `<p>Afternoon schedule for ${date.format("dddd, MMMM D, YYYY")}</p>`;
        night.innerHTML = `<p>Night schedule for ${date.format("dddd, MMMM D, YYYY")}</p>`;
  }
 
// get current hour
const currentHour = new Date().getHours();

// get time content elements
const timeContent = document.querySelector('.time-content');
const tabs = timeContent.querySelectorAll('.nav-link');
const tabPanes = timeContent.querySelectorAll('.tab-pane');

// activate appropriate tab based on current time
if (currentHour < 12) {
  tabs[0].classList.add('active');
  tabPanes[0].classList.add('show', 'active');
} else if (currentHour < 18) {
  tabs[1].classList.add('active');
  tabPanes[1].classList.add('show', 'active');
} else {
  tabs[2].classList.add('active');
  tabPanes[2].classList.add('show', 'active');
}