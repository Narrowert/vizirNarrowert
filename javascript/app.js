const swiper = new Swiper('.first-section__swiper', {
    
    spaceBetween: 10,
    loop: false,
    autoplay: {
      delay: 1500,
    },
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.main-btn__next',
      prevEl: '.main-btn__prev',
    },

});

const swiperManufacturing = new Swiper('.manufacturing__swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  
  navigation: {
    nextEl: '.manufacturing-btn__next',
    prevEl: '.manufacturing-btn__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
})

/* burger */

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

const disScroll = (e) => {
  let pagePosition = window.scrollY;
  document.body.classList.add('dis__scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + 'px';
}

const enScroll = (e) => {
  let pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto';
  document.body.classList.remove('dis__scroll');
  window.scrollTo({
    top: pagePosition,
    left: 0
  });
  document.body.removeAttribute('data-position');
}

burger.addEventListener('click', (e) => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('nav--active');
  overlay.classList.toggle('overlay--active');

  if(burger.classList.contains('burger--active')){
    disScroll();
  } else {
    enScroll();
  }
});
