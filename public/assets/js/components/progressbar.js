function createProgressBar(percentage, color) {
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress');
  const progressBarInner = document.createElement('div');
  progressBarInner.classList.add('progress-bar');
  progressBarInner.style.width = '0%'; // Set initial width to 0%
  progressBarInner.style.backgroundColor = color;
  progressBar.appendChild(progressBarInner);

  // Animate the width of the progress bar
  window.requestAnimationFrame(() => {
    progressBarInner.style.width = `${percentage}%`;
    progressBarInner.style.transition = 'width 1.4s ease-in-out';
  });

  return progressBar;
}

document.getElementById('level-progress').appendChild(createProgressBar(61, '#05EA00'));

function createCircularProgressBar(percentage, color) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 50 50');
  svg.setAttribute('width', '60%');
  svg.setAttribute('height', '60%');

  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  // Add background circle
  const bgCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  bgCircle.setAttribute('cx', '50%');
  bgCircle.setAttribute('cy', '50%');
  bgCircle.setAttribute('r', radius);
  bgCircle.setAttribute('fill', 'transparent');
  bgCircle.setAttribute('stroke', 'var(--bs-secondary-bg)'); // set background color
  bgCircle.setAttribute('stroke-width', '5');

  // Add progress circle
  const progressCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  progressCircle.setAttribute('cx', '50%');
  progressCircle.setAttribute('cy', '50%');
  progressCircle.setAttribute('r', radius);
  progressCircle.setAttribute('fill', 'transparent');
  progressCircle.setAttribute('stroke', color);
  progressCircle.setAttribute('stroke-width', '5');
  progressCircle.setAttribute('stroke-dasharray', `${circumference} ${circumference}`);
  progressCircle.setAttribute('stroke-dashoffset', circumference);

  const percentageText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  percentageText.setAttribute('x', '50%');
  percentageText.setAttribute('y', '50%');
  percentageText.setAttribute('text-anchor', 'middle');
  percentageText.setAttribute('alignment-baseline', 'middle');
  percentageText.setAttribute('font-size', '.5rem');
  percentageText.setAttribute('font-weight', 'bold');
  percentageText.setAttribute('fill', 'var(--main-text-color)');
  percentageText.textContent = `${percentage}%`;

  svg.appendChild(bgCircle);
  svg.appendChild(progressCircle);
  svg.appendChild(percentageText);

  const offset = circumference - percentage / 100 * circumference;
  progressCircle.style.strokeDashoffset = circumference;
  setTimeout(() => {
    progressCircle.style.transition = 'stroke-dashoffset 1s ease-in-out';
    progressCircle.style.strokeDashoffset = offset;
  }, 100);

  return svg;
}

document.getElementById('timeframeProgress').appendChild(createCircularProgressBar(72, '#05EA00'));
