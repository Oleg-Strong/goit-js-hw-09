import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chekDate(selectedDates[0]);
  },
};
flatpickr('#datetime-picker', options);

const btnEl = document.querySelector('[data-start]');
btnEl.setAttribute('disabled', 'true');

const inputEl = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let intervalId = null;

const pad = value => String(value).padStart(2, '0');

const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));

  const hours = pad(Math.floor((ms % day) / hour));

  const minutes = pad(Math.floor(((ms % day) % hour) / minute));

  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

const chekDate = date => {
  const currentDate = new Date().getTime();
  const selectedDate = date.getTime();

  if (currentDate < selectedDate) {
    Notify.success('Для запуска таймера нажмите кнопку "Start"');
    btnEl.removeAttribute('disabled');
    btnStart(selectedDate);
  } else {
    Notify.failure('ВЫБЕРИТЕ ДАТУ');
  }
};

const btnStart = elemnt => {
  btnEl.addEventListener('click', () => {
    inputEl.setAttribute('disabled', 'true');
    btnEl.setAttribute('disabled', 'true');
    timer(elemnt);
  });
};

const timer = targetDate => {
  intervalId = setInterval(() => {
    const delta = targetDate - new Date();
    renderTimer(delta);
  }, 1000);
};

const renderTimer = value => {
  const { days, hours, minutes, seconds } = convertMs(value);

  if (days === '00' && hours === '00' && minutes === '00' && seconds === '00') {
    clearInterval(intervalId);
  }
  console.log(days);
  console.log(hours);
  console.log(minutes);
  console.log(seconds);
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
};
