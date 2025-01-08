const links = document.querySelectorAll(".nav__link")
const currentPath = window.location.pathname

// Remove active class from all links
links.forEach(link => link.classList.remove("navber__list--active"))

// Add active class to the current link
links.forEach(link => {
    const href = link.getAttribute("href")

    if (href === currentPath) {
        link.classList.add("navber__list--active")
    }
    else if (currentPath.includes("resipeDetails") && href === "/src/pages/resipes") {
        link.classList.add("navber__list--active")
    }
    else if (currentPath.includes("blogDetails") && href === "/src/pages/blog") {
        link.classList.add("navber__list--active")
    }

})


// handle  menu  
const navBer = document.querySelector(".navber");
const barIcon = document.querySelector(".bar__icon");
const xmarkIcon = document.querySelector(".xmark__icon")

// open menu slide 
barIcon.addEventListener("click", () => {
    navBer.classList.add("navber--open");
});

// close menu slide 
xmarkIcon.addEventListener("click", () => {
    navBer.classList.remove("navber--open");
});