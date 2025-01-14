// hero slider 
const heroSlider = document.querySelector(".hero__slider")
if (heroSlider) {
    new Swiper(heroSlider, {
        // Optional parameters
        loop: true,
        speed: 2500,
        autoplay: {
            delay: 2000,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }

    });

}

// categories slider
const categroySlider = document.querySelector(".categories__carts--slider")
if (categroySlider) {

    const categoryesCartsSlider = new Swiper(categroySlider, {
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
        }

    })

    // Stop autoplay on hover
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach((slide) => {
        // Stop autoplay on hover
        slide.addEventListener('mouseenter', () => {
            categoryesCartsSlider.autoplay.stop();
        });

        // start autoplay on hover
        slide.addEventListener('mouseleave', () => {
            categoryesCartsSlider.autoplay.start();
        });
    });
}