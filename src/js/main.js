import menuMobile from './plugins/menu';
import sliderByTimeout from './plugins/top-slider';
import scrolling from './plugins/scrolling';
import loadMoreNews from './plugins/loadMoreNews';

window.addEventListener("DOMContentLoaded", () => {
  menuMobile();
  sliderByTimeout('.top-slider', '.top-slider__item');
  scrolling();
  loadMoreNews();
})