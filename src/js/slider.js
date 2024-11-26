const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const sliderLine = document.querySelector('.slider__line');

const aboutContainer = document.querySelector('.section-about__container');
const sectionAbout = document.querySelector('.section-about');
const sliderWidth = 1998;

let windowWidth;
let sliderWindowWidth;

let sliderPosition = 0;
let step;
let slideIndex = 0;
let maxSlideIndex = windowWidth > 768 ? 3 : 6;

// код для мониторинга ширины slider
function initSliderWidth() {
  windowWidth = window.innerWidth;
  sliderWindowWidth = aboutContainer.offsetWidth;
  getSliderStep();
  maxSlideIndex = windowWidth > 768 ? 3 : 6;
  // код для: При изменении ширины экрана слайдер линия возвращается в исходное положение, и её можно полностью прокрутить нажав необходимое количество кнопок со стрелками (работает без перезагрузки страницы)
  sliderPosition = 0;
  sliderLine.style.left = sliderPosition + 'px';
  slideIndex = 0;
  btnPrev.classList.add('inactive-btn');
  btnNext.classList.remove('inactive-btn');
}
window.addEventListener('resize', initSliderWidth);
initSliderWidth();

// код для движения слайдера
function getSliderStep() {
  if (windowWidth > 768) {
    step = Math.ceil((sliderWidth - sliderWindowWidth) / 3);
  } else {
    step = Math.ceil((sliderWidth - sliderWindowWidth) / 6);
  }
}

function nextSlide() {
  if (slideIndex < maxSlideIndex) {
    sliderPosition -= step;
    sliderLine.style.left = sliderPosition + 'px';
    slideIndex++;
    isActiveBtn();
  }
}

function prevSlide() {
  if (slideIndex > 0) {
    sliderPosition += step;
    sliderLine.style.left = sliderPosition + 'px';
    slideIndex--;
    isActiveBtn();
  }
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

function isActiveBtn() {
  if (slideIndex === 0) {
    btnPrev.classList.add('inactive-btn');
  } else if (slideIndex === maxSlideIndex) {
    btnNext.classList.add('inactive-btn');
  } else {
    btnPrev.classList.remove('inactive-btn');
    btnNext.classList.remove('inactive-btn');
  }
}
isActiveBtn();
