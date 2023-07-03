let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header__nav-link');



menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

menu.addEventListener('click', () => {
  menuBtn.classList.remove('active');
	menu.classList.remove('active');
});

var swiper = new Swiper(".images", {
  speed: 2600,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});
