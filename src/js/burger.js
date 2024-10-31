const body = document.querySelector('body');
const header = document.querySelector('.header');
const burgerBtn = document.querySelector('.burger-menu');
const navLinks = document.querySelectorAll('.navigation li a');

function openBurger() {
  burgerBtn.classList.toggle('active');
  header.classList.toggle('active');
  body.classList.toggle('unscroll');
}

function closeBurger() {
  burgerBtn.classList.remove('active');
  header.classList.remove('active');
  body.classList.remove('unscroll');
}

burgerBtn.addEventListener('click', openBurger);

navLinks.forEach((link) => link.addEventListener('click', openBurger));

// код для мониторинга ширины окна браузера, что бы закрывал бургер
function initWindowWidth() {
  let windowWidth = window.innerWidth;
  if (windowWidth > 768) {
    closeBurger();
  }
}
window.addEventListener('resize', initWindowWidth);
initWindowWidth();
