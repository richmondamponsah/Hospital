
// start nav bar drop menu open and close function
const navItems = document.querySelector('#nav_items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

openNavBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
})

const closeNav = () =>{
    navItems.style.display = 'none';
    closeNavBtn.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
}
closeNavBtn.addEventListener('click', closeNav);
// end nav bar open Nav close function

//close Nav when a menu item is clicked on tablets and mobile devices
if(window.innerWidth <= 1024) {
    document.querySelectorAll('#nav_items li a').forEach(navItem => {
        navItem.addEventListener('click', () => {
            closeNav();
        })
    })
};

// On scroll, change the navbar style
//creates a scroll class toggle

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY >  0);
});



// Initialize Swiper //
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3
  
    },
    // when window width is >= 600px
    600: {
        slidesPerView: 2
       
      },
      // when window width is >= 320px
    320: {
        slidesPerView: 1
       
      }
  }
});
