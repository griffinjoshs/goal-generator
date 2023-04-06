function displayCurrentYear (date) {
    document.querySelector('.year-content').classList.remove('hide')

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: `${date.format('YYYY')}` + ' ' + 'Progress',
      data: [12, 19, 3, 5, 2, 3, 10],
      borderColor: "#007bff",
      backgroundColor: "#007bff",
      borderWidth: 1,
      fill: false
    }]
  };
  
  const options = {
    options: {
        scales: {
          yAxes: [{
            type: "linear",
            ticks: {
              beginAtZero: true,
              max: 100
            }
          }]
        }
      }      
  };

  
  
  const lineChart = new Chart(document.getElementById("line-chart"), {
    type: "line",
    data: data,
    options: options
  });
  
}