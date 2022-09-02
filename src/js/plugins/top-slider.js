function sliderByTimeout(sliderSelector, slideSelector) {
  const slider = document.querySelector(sliderSelector);
  const slides = slider.querySelectorAll(slideSelector);
  let slideNow = 1;

  slides.forEach(slide => {
    slide.classList.add('animated');
  })

  function hideAllSlide() {
    slides.forEach(slide => {
      slide.classList.remove('fadeInLeft');
      slide.style.display = 'none';
    })
  }


  function showSlide(n = 1) {
    hideAllSlide()
    if (n > slides.length) {
      n = 1;
    }
    if (n < 1) {
      n = 1;
    }
    slideNow = n;
    slides[slideNow - 1].style.display = 'block';
    slides[slideNow - 1].classList.add('fadeInLeft');
  };
  hideAllSlide();
  showSlide();
  setInterval(() => {
    showSlide(slideNow + 1)
  }, 4000)
};
export default sliderByTimeout;