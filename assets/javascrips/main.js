const navBer = document.querySelector(".navber");
const barIcon = document.querySelector(".bar__icon");
const xmarkIcon = document.querySelector(".xmark__icon")

// handle navbar 

barIcon.addEventListener("click", () => {
    navBer.classList.add("navber--open");
});

xmarkIcon.addEventListener("click", () => {
    navBer.classList.remove("navber--open");
});