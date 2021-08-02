const swiper = new Swiper('.welcome-slider-selector', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },        
  });

const mobileBtn = document.querySelector('.btn-menu');
const mobileMenu = document.querySelector('.mobile-menu__wrap');
const substrate  =document.querySelector('.substrate');

mobileBtn.addEventListener('click', ()=> {
  mobileBtn.classList.toggle('_active');
  mobileMenu.classList.toggle('_active');
  substrate.classList.toggle('_active');
  document.body.classList.toggle('lock');
})

substrate.addEventListener('click', ()=> {
  if(mobileMenu.classList.contains('_active')) {
    mobileMenu.classList.remove('_active');
    mobileBtn.classList.remove('_active');
    substrate.classList.remove('_active');
    document.body.classList.remove('lock');
  }
})