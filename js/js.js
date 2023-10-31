//SLIDER

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider__item');

const slideCount = slides.length;
let activeSlide = 0;

setInterval(() => {
  slides[activeSlide].classList.remove('active');
  activeSlide++;
  if (activeSlide === slideCount) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add('active');
}, 8000);

//end of slider

