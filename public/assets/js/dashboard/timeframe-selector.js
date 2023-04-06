// Get the URL pathname
const pathname = window.location.pathname;

// Hide all views
const views = document.querySelectorAll('.view');
views.forEach(view => {
  view.style.display = 'none';
});

// Set the value of the time-view-select dropdown based on the URL
const timeViewSelect = document.querySelector('.time-view-select');
if (pathname.includes('/dashboard/day/')) {
  timeViewSelect.value = 'day';
  document.getElementById('day-view').style.display = 'block';
} else if (pathname.includes('/dashboard/week/')) {
  timeViewSelect.value = 'week';
  document.getElementById('week-view').style.display = 'block';
} else if (pathname.includes('/dashboard/month/')) {
  timeViewSelect.value = 'month';
  document.getElementById('month-view').style.display = 'block';
} else if (pathname.includes('/dashboard/year/')) {
  timeViewSelect.value = 'year';
  document.getElementById('year-view').style.display = 'block';
}

// Listen for the change event on the selector and update the URL route
timeViewSelect.addEventListener('change', e => {
  const value = e.target.value;
  switch (value) {
    case 'day':
      window.location.href = '/dashboard/day/';
      break;
    case 'week':
      window.location.href = '/dashboard/week/';
      break;
    case 'month':
      window.location.href = '/dashboard/month/';
      break;
    case 'year':
      window.location.href = '/dashboard/year/';
      break;
  }
});

const showSelectedView = () => {
    const selectedView = timeViewSelect.value;
  views.forEach(view => {
    if (view.id === `${selectedView}-view`) {
      view.style.display = 'flex';
    } else {
      view.style.display = 'none';
    }
  });
    views.forEach(view => {
      if (view.id === `${selectedView}-view`) {
        view.style.display = 'flex';
      }
    });
}

// Update the view when the dropdown is changed
timeViewSelect.addEventListener('change', showSelectedView);

showSelectedView()