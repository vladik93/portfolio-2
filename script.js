// HEADER MENU
const headerMenuBtn = document.getElementById('header-menu-button');
const headerMenuEl = document.getElementById('header-menu');

let isMenuActive = false;


headerMenuBtn.addEventListener('click', () => {
  isMenuActive = !isMenuActive;

  if(isMenuActive) {
    headerMenuEl.classList.add('show');
    headerMenuBtn.classList.add('active');  
  } else {
    headerMenuEl.classList.remove('show');
    headerMenuBtn.classList.remove('active')
  }
})


