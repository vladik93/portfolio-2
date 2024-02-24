// HEADER MENU
const headerMenuBtn = document.getElementById('header-menu-button');
const headerMenuEl = document.getElementById('header-menu');

const menuNavItemEls = document.querySelectorAll('.menu-nav-item');
const menuSocialItemEls = document.querySelectorAll('.menu-social-item');



let isMenuActive = false;


headerMenuBtn.addEventListener('click', () => {
  isMenuActive = !isMenuActive;

  if(isMenuActive) {
    headerMenuEl.classList.add('show');
    headerMenuBtn.classList.add('active');  

    menuNavItemEls.forEach((item) => {
      item.classList.add('show');
    })

    menuSocialItemEls.forEach(item => {
      item.classList.add('show');
    })
  } else {
    headerMenuEl.classList.remove('show');
    headerMenuBtn.classList.remove('active')
    
    menuNavItemEls.forEach((item) => {
      item.classList.remove('show');

      menuSocialItemEls.forEach(item => {
        item.classList.remove('show');
      })
    })

  }
})


