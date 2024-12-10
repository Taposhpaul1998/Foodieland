// hero slider 

new Swiper('.hero__slider', {
    // Optional parameters
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 2000,
    }

});

// categories slider
const categoriesCartsSlider = new Swiper(".categories__carts--slider", {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000, // Automatic sliding delay (in ms)
        disableOnInteraction: false, // Keep autoplay active after user interaction
    },
    spaceBetween: 40,
    breakpoints: {
        1200: {
            slidesPerView: 6,
        },
        992: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 4,
        },
        685: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        },
    },
})

// Stop autoplay on hover
const slides = document.querySelectorAll('.swiper-slide');
slides.forEach((slide) => {
    // Stop autoplay on hover
    slide.addEventListener('mouseenter', () => {
        categoriesCartsSlider.autoplay.stop();
    });

    // start autoplay on hover
    slide.addEventListener('mouseleave', () => {
        categoriesCartsSlider.autoplay.start();
    });
});