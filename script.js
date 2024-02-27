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


// START SECTION

const starSectionEl = document.getElementById('star-section');
const starEl = document.getElementById('star');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   if(entry.isIntersecting) {
    console.log(entry.intersectionRect);
    window.addEventListener('scroll', () => {
      starEl.classList.add('animate');
      starEl.style.animationPlayState = "running";
      
    });

    window.addEventListener('scrollend', () => {
      starEl.style.animationPlayState = "paused";
    })


   
   }
  })
}, {
  threshold: 0.3
});

observer.observe(starSectionEl);
