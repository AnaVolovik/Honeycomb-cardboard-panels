// SLIDER

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

// end of slider

// FORM

const orderButton = document.querySelector('#js-go-to-form');
const orderForm = document.querySelector('.form');
const closeIcon = document.querySelector('.form__icon');
const wrapperBgc = document.querySelector('#js-wrapper-shaded');

orderButton.addEventListener('click', () => {
  orderForm.classList.add('_opened');
  wrapperBgc.classList.add('_shaded');
})

closeIcon.addEventListener('click', () => {
  orderForm.classList.remove('_opened');
  wrapperBgc.classList.remove('_shaded');
})

const inputs = document.querySelectorAll('.form__input');
let name = document.querySelector('#js-input-name');
let phone = document.querySelector('#js-input-phone');

function validateForm(form) {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove('required');
  }

  const nameValue = isNotEmpty(form.name);
  const phoneValue = isNotEmpty(form.phone);

  const correctName = isCorrect(form.name, /^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]+$/);
  const correctPhone = isCorrect(form.phone, /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/);

  return nameValue && phoneValue && correctName && correctPhone;
}

function isNotEmpty(input) {
  for (let i = 0; i < inputs.length; i++) {
    input = inputs[i];
    if (input.value.trim() === '') {
      input.required = true;
      input.classList.add('required');
      return false;
    }
  }
  return true;
}

function isCorrect(val, regex) {
  if (!isNotEmpty(val)){
    return false;
  }
  
  if (!regex.test(val.value)){
    val.required = true;
    val.classList.add('required');
    return false;
  }

  wrapperBgc.classList.remove('_shaded');
  return true;
}

// end of form
