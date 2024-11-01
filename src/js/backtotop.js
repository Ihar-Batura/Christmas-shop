const btnBackToTop = document.querySelector('.btn__back-top');

let windowWidth;
let windowScroll;

function showBtnTop() {
  if (windowWidth <= 768 && windowScroll > 100) {
    btnBackToTop.classList.add('active');
  } else {
    btnBackToTop.classList.remove('active');
  }
}

function initWindowWidth() {
  windowWidth = window.innerWidth;
  showBtnTop();
}

function initWindowScroll() {
  windowScroll = Math.floor(window.scrollY);
  showBtnTop();
}

window.addEventListener('scroll', initWindowScroll);

window.addEventListener('resize', initWindowWidth);
initWindowWidth();
initWindowScroll();

function scrollBackToTop() {
  window.scrollTo(scrollY, 0);
}

btnBackToTop.addEventListener('click', scrollBackToTop);
