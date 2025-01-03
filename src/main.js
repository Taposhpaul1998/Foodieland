import products from "../data/products.json";
import "./javascrips/home/testyResipes.js";
import "./javascrips/resipes/resipes.js";
import "./javascrips/resipes/resipeDetails.js";

// Load component function

const loadComponent = async (id, file) => {
    const response = await fetch(file);
    const content = await response.text();
    document.getElementById(id).innerHTML = content;

    // dynamic acive nav links on live page 

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
        else if (currentPath === "/src/pages/resipeDetails" && href === "/src/pages/resipes") {
            link.classList.add("navber__list--active")
        }
        else if (currentPath === "/src/pages/blogDetails" && href === "/src/pages/blog") {
            link.classList.add("navber__list--active")
        }

    })


    // handle  menu  
    const navBer = document.querySelector(".navber");
    const barIcon = document.querySelector(".bar__icon");
    const xmarkIcon = document.querySelector(".xmark__icon")



    if (barIcon) {
        barIcon.addEventListener("click", () => {
            navBer.classList.add("navber--open");
        });
    }

    xmarkIcon.addEventListener("click", () => {
        navBer.classList.remove("navber--open");
    });

    // handle scroll up button 

    const scrollUpBtn = document.querySelector(".scrollup__btn");

    if (scrollUpBtn) {
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
    }


    // handle subscribe form
    const subscribeForm = document.querySelector('#subscribeForm');

    subscribeForm.addEventListener("submit", (e) => {
        e.preventDefault();



        const email = subscribeForm.email.value;
        if (email) {
            // toast message 
            const toast = document.createElement("div");
            toast.classList.add("toast");
            toast.textContent = `Your email: ${email}`;
            document.body.appendChild(toast);

            setTimeout(() => {
                toast.remove();
            }, 5000);

            // resete form 
            subscribeForm.reset();
        }
    });

};

loadComponent("header", "/src/components/header.html")
loadComponent("subscribe", "/src/components/subcription.html")
loadComponent("check", "/src/components/checkResipes.html")
loadComponent("footer", "/src/components/footer.html")

// set logcal storage resipes data 

window.localStorage.setItem("resipes", JSON.stringify(products))

const blog = document.querySelectorAll(".single__blog")

blog.forEach(blogPost => {
    blogPost.addEventListener("click", () => {
        window.location.href = "/src/pages/blogDetails"
    })
})



