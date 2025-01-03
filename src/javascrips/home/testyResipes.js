// get resipes form localStorage 

import moreResipes from "./moreResipes";

let resipes = JSON.parse(localStorage.getItem('resipes')) || [];

const ads = {
    img: "assets/images/home-image/Ads.png",
    id: "ads"
}

// home page resipes 
const resipesCards = document.querySelector(".resipes__cards");
const homePage = window.location.pathname === "/";

if (homePage) {

    // testy resipes 
    const adsTemplate = document.querySelector("#ads__template");
    const template = document.querySelector("#resipe__template");
    const tastyResipes = resipes.slice(0, 8);

    tastyResipes.splice(5, 0, ads);

    tastyResipes.forEach((resipe) => {

        if (resipe.id === "ads") {
            const clone = adsTemplate.content.cloneNode(true);
            clone.querySelector(".ads__img").src = `../../${resipe.img}`;
            resipesCards.appendChild(clone);
        } else {
            const clone = template.content.cloneNode(true);
            clone.querySelector(".cart__img").src = `../../${resipe.img}`;
            clone.querySelector(".cart__title").textContent = resipe.title;
            clone.querySelector(".category").textContent = resipe.category;

            clone.querySelector(".fa-heart").classList.add(resipe.favorite && "favorite__cart");

            const favoriteCart = clone.querySelector(".fa-heart");
            clone.querySelector(".single__cart").addEventListener("click", (e) => {

                if (e.target === favoriteCart) {

                    resipe.favorite = !resipe.favorite;
                    favoriteCart.classList.toggle("favorite__cart");
                    localStorage.setItem("resipes", JSON.stringify(allResipes));

                }
                else if (e.target !== favoriteCart) {
                    window.location.href = `/src/pages/resipeDetails?id=${resipe.id}`
                }
            });

            resipesCards.appendChild(clone);
        }
    })

    // more resipes
    moreResipes(resipes);

}


