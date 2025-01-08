const swiperWrapper = document.querySelector(".swiper-wrapper");
const slider = [
    "../assets/images/homePage/slider-01.jpg",
    "../assets/images/homePage/slider-03.jpg",
    "../assets/images/homePage/slider-02.jpg"
];

slider.forEach((image, index) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `
        <a href="#">
            <img src="${image}" alt="Slide ${index + 1}">
        </a>
    `;
    swiperWrapper.appendChild(slide);
});


let currentIndex = 0;
const totalSlides = slider.length;

const updateSlider = () => {
    const slideWidth = swiperWrapper.firstElementChild.clientWidth;
    swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updatePagination();
};

const updatePagination = () => {
    const dots = document.querySelectorAll(".swiper-pagination-bullet");
    dots.forEach((dot, index) => {
        dot.classList.toggle("swiper-pagination-bullet-active", index === currentIndex);
    });
};

const autoplayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;  
    updateSlider();
}, 1000);  


