const startBtn = document.querySelector('button[data-start]');
startBtn.addEventListener('click', colorSwitcherOn);

const stopBtn = document.querySelector('button[data-stop]');
let intervalId = null;
stopBtn.addEventListener('click', colorSwitcherOff);
stopBtn.setAttribute('disabled', 'true');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorSwitcherOn() {
  startBtn.setAttribute('disabled', 'true');
  stopBtn.removeAttribute('disabled');
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
}

function colorSwitcherOff() {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'true');
  clearInterval(intervalId);
}
