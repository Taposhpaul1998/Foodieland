// header  navbar handle 

const navBer = document.querySelector(".navber");
const barIcon = document.querySelector(".bar__icon");
const xmarkIcon = document.querySelector(".xmark__icon")

// handle  menu

barIcon.addEventListener("click", () => {
    navBer.classList.add("navber--open");
});

xmarkIcon.addEventListener("click", () => {
    navBer.classList.remove("navber--open");
});

// handle scroll up button 

const scrollUpBtn = document.querySelector(".scrollup__btn");

window.addEventListener("scroll", () => {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = document.documentElement.scrollTop;

    // Calculate scroll percentage
    const scrollPercent = Math.round((scrollPosition / scrollHeight) * 100)

    // Show or hide scroll up button
    if (scrollPosition > 200) {
        scrollUpBtn.classList.add("visible");
    } else {
        scrollUpBtn.classList.remove("visible");
    }
    scrollUpBtn.style.background = `conic-gradient(#ff5200fa ${scrollPercent}%, #d7d7d7 ${scrollPercent}%)`;

});

// smooth scroll 

scrollUpBtn.addEventListener("click", () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});