


  var swiper = new Swiper(".sale_sec", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests:true,
      clickable: true
    },

    slidesPerView:5,
    spaceBetween:30,
    autoplay:
    {
        delay:5000,
    },
    loop:true 
  });