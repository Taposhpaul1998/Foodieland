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
    console.log(scrollPercent);

});

// smooth scroll 

scrollUpBtn.addEventListener("click", () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});