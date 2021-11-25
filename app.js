const slider = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slider-container img');
const slidesLength = slides.length;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');

let activeSlideIdx = 0;

const goToSlide = slide => {
  slides.forEach((s, idx) => {
    s.style.transform = `translateX(${(idx - slide) * 100}%)`;
  });
};

goToSlide(0);

nextBtn.addEventListener('click', () => {
  activeSlideIdx++;
  if (activeSlideIdx > slidesLength - 1) {
    activeSlideIdx = 0;
  }
  goToSlide(activeSlideIdx);
});
prevBtn.addEventListener('click', () => {
  activeSlideIdx--;
  if (activeSlideIdx < 0) {
    activeSlideIdx = slidesLength - 1;
  }
  goToSlide(activeSlideIdx);
});
