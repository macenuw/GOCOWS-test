function menuMobile() {
  const menu = document.querySelector('.menu');
  const menuBtn = menu.querySelector('.menu__btn')
  menuBtn.addEventListener('click', activeMenu);
  //add active class for menu
  function activeMenu() {
    menu.classList.toggle('active');
  }
  //check client window if window > 820 remove active class menu
  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > 820) {
      menu.classList.remove('active')
    }
  });

};
export default menuMobile;