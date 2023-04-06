document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.querySelectorAll('.btn-circle');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      let task = this.closest('.task');
      task.classList.toggle('checked');
      let progress = this.querySelector('.progress');
      if (task.classList.contains('checked')) {
        progress.style.width = '100%';
      } else {
        progress.style.width = '0%';
      }
    });
  });
});

let button = document.querySelector('.btn-circle');
button.addEventListener('click', function() {
  this.classList.toggle('checked');
});

// const taskToHTML = (htmlElement, goalName, goalIcon, taskName) => {
//   document.querySelector(htmlElement).innerHTML +=
//     ` <div class="task-container">
//     <h4 class="time">8:00 AM</h4>
//     <div class="task m-0 p-0 d-flex align-items-center">
//       <div class="col-5 d-flex align-items-center justify-content-between m-0 p-0" style="z-index: 15;">
//         <h3 class="p-0 m-0">
//           <i class="${goalIcon}"></i>
//         </h3>
//         <div class="task-info">
//           <h2 class="m-0 p-0 goal-name">${goalName}</h2>
//           <p class="m-0 p-0 text-mainColor">${taskName}</p>
//         </div>
//       </div>
//       <div class="col-4" style="z-index: 10;"></div>
//       <div class="col-3 h-100" style="z-index: 10;">
//         <button type="button" class="btn-circle d-flex align-items-center justify-content-center" style="font-size: 50px;">
//           <i class="fas fa-circle" style="z-index: 10;"></i>
//           <div class="progress"></div>
//         </button>
//       </div>
//     </div>
//     </div> `

// }