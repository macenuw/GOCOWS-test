function loadMoreNews() {
  try {
    const loadMoreBtn = document.querySelector('.news__show-more'),
      newsItems = document.querySelectorAll('.news .post-card');
    loadMoreBtn.addEventListener('click', () => {
      let count = 0;
      newsItems.forEach((item, index) => {
        if (item.classList.contains('disable') && count < 2) {
          item.classList.remove('disable');
          item.classList.add('animated', 'fadeInLeft');
          count++
          if (index === newsItems.length - 1) {
            loadMoreBtn.classList.add('animated', 'fadeOutRight');
            loadMoreBtn.style.display = 'none';
          }
        }
      })
    })
  } catch (error) {}
};
export default loadMoreNews;