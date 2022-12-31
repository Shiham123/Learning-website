const prevIndicatorEl = document.querySelector('#indicator-one'),
  centerIndicatorEl = document.querySelector('#indicator-two'),
  nextIndicatorEl = document.querySelector('#indicator-three'),
  sliderContainerEl = document.querySelector('#slider-container');

let currentEl = 1,
  sliderLength = sliderContainerEl.length;

prevIndicatorEl.addEventListener('click', () => {
  sliderContainerEl.style.transform = `translateX(1050px)`;
});

centerIndicatorEl.addEventListener('click', () => {
  sliderContainerEl.style.transform = `translateX(0px)`;
});

nextIndicatorEl.addEventListener('click', () => {
  sliderContainerEl.style.transform = `translateX(-1050px)`;
});
