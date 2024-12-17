
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

    })


    // handle  menu  
    const navBer = document.querySelector(".navber");
    const barIcon = document.querySelector(".bar__icon");
    const xmarkIcon = document.querySelector(".xmark__icon")



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

};

loadComponent("header", "/src/components/header.html")
loadComponent("subscribe", "/src/components/subcription.html")
loadComponent("check", "/src/components/checkResipes.html")
loadComponent("footer", "/src/components/footer.html")

// header  navbar handle 
