const swiper=new Swiper('.mainBanner',{
    slidesPerview:1,
    spaceBetween:10,
    
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },

    autoplay:{
        delay:7000,
        disableOnInteraction:false,
    },

    effect:'fade',
    speed:1000,
})