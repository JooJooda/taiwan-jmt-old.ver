var swiper = new Swiper(".recmd", {
  slidesPerView:2.5,
  spaceBetween:10,
  
  scrollbar:{
    el:".swiper-scrollbar",
    draggable:false,
    dragSize:80,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable:true,
  },

  breakpoints:{
    576:{
      slidesPerView:3,
      spaceBetween:15,
    },
    768:{
      slidesPerView:4,
      spaceBetween:20
    },
    1024:{
      slidesPerView:5,
      spaceBetween:20
    }
  },

});

