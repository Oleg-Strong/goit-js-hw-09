import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', formSabmit);

let delayVal = null;
let stepVal = null;
let amountVal = null;
function formSabmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;
  delayVal = Number(delay.value);
  stepVal = Number(step.value);
  amountVal = Number(amount.value);
  for (let i = 1; i <= amountVal; i += 1) {
    createPromise(i, delayVal)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayVal += stepVal;
  }
  event.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
