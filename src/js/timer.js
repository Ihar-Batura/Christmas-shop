const itemDays = document.querySelector('.item-days');
const itemHours = document.querySelector('.item-hours');
const itemMinutes = document.querySelector('.item-minutes');
const itemSeconds = document.querySelector('.item-seconds');

function changeTimer() {
  const utcDateNow = new Date().toISOString();
  const yearNow = new Date().getUTCFullYear();
  const nextNewYear = new Date(Date.UTC(yearNow + 1, 0, 1)).toISOString();
  const millisecNow = Date.parse(utcDateNow);
  const millisecNewYear = Date.parse(nextNewYear);
  const millisecods = millisecNewYear - millisecNow;

  const days = Math.floor(millisecods / (1000 * 60 * 60 * 24));
  const hours = Math.floor((millisecods / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((millisecods / (1000 * 60)) % 60);
  const seconds = Math.floor((millisecods / 1000) % 60);

  itemDays.innerHTML = days > 0 ? days : 0;
  itemHours.innerHTML = hours > 0 ? hours : 0;
  itemMinutes.innerHTML = minutes > 0 ? minutes : 0;
  itemSeconds.innerHTML = seconds > 0 ? seconds : 0;
}
changeTimer();
setInterval(changeTimer, 1000);
