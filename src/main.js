import "./javascrips/components/header.js"
import "./javascrips/components/subcription.js"
import "./javascrips/components/footer.js"
import "./javascrips/setDataLocalStorage.js"
import "./javascrips/header/headerMenu.js"
import "./javascrips/home/testyResipes.js";
import "./javascrips/resipes/resipes.js";
import "./javascrips/blog/blog.js"
import "./javascrips/contact/contact.js"
import "./javascrips/subcribe/subbcrie.js"
import "./javascrips/swiperSlider.js"
import "./javascrips/wow-init.js"



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




const instraBtn = document.querySelector(".btn__view--instagram")

if (instraBtn) {

    instraBtn.addEventListener("click", () => {
        window.open("https://instagram.com/", "_blank")
    })
}





