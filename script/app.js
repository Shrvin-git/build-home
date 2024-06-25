

const swiper = new Swiper('.swiper', {

  slidesPerView: 2,
  spaceBetween: 0,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});










// loop: true,

//   pagination: {
//   el: '.swiper-pagination',
//   },

// });




const navToggleIcon = document.querySelector('.nav__btn-toggle')
const menu = document.querySelector('.menu')

navToggleIcon.addEventListener('click', function () {
  this.classList.toggle('nav__toggle-icon--open');
  menu.classList.toggle('menu--open');

})