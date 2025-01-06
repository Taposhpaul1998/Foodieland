import "./resipeDetails"
// get resipes form localStorage 

let allResipes = JSON.parse(localStorage.getItem('resipes')) || [];


const categorys = [...new Set(allResipes.map(resipe => resipe.category))];

// favorite btn 
const favorite = document.querySelector(".favorite__btn")

// display resipes 

const displayResipes = (resipes) => {

    // resipes page 
    const resipesContainer = document.querySelector(".resipes__container");

    if (resipesContainer) {

        // filter resipes count
        const resipesCount = document.querySelector(".count__text");
        resipesCount.textContent = resipes.length > 1 ? ` Total resipes: ${resipes.length} ` : `Total resipes: : ${resipes.length
            }`;

        // display resipes
        const resipesCards = document.querySelector(".resipes__cards");
        const template = document.querySelector("#resipe__template");
        resipesCards.replaceChildren();
        resipes.forEach((resipe) => {
            const clone = template.content.cloneNode(true);
            clone.querySelector(".cart__img").src = `../../${resipe.img}`;
            clone.querySelector(".cart__title").textContent = `${resipe.title.length > 48 ? resipe.title.slice(0, 47) + "..." : resipe.title}`;
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
        })

    }
};

displayResipes(allResipes)

// search resipes
const searchForm = document.querySelector(".search__input");

if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const searchValue = searchForm.search.value.toLowerCase().trim();
        const resipes = allResipes.filter(resipe => {
            return resipe.title.toLowerCase().includes(searchValue) || resipe.category.toLowerCase().includes(searchValue);
        });

        displayResipes(resipes);

        // remove favorite class
        favorite.classList.remove("favorite-active")
    });

}

// display category

const categoryContainer = document.querySelector("#category");

if (categoryContainer) {
    categorys.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryContainer.appendChild(option);

    });

    // filter resipes by category
    categoryContainer.addEventListener("change", (e) => {

        if (e.target.value === "") {
            return displayResipes(allResipes);
        }
        const categoryValue = e.target.value;
        const resipes = allResipes.filter(resipe => resipe.category === categoryValue);
        displayResipes(resipes);
        // reset search input
        searchForm.search.value = "";
        // remove favorite class
        favorite.classList.remove("favorite-active")
    });
}

// show favorite resipes
const toggleText = document.querySelector("#toggle_text")

if (favorite) {
    favorite.addEventListener("click", () => {
        // toggle class 
        favorite.classList.toggle("favorite-active");
        if (favorite.classList[1] === "favorite-active") {

            toggleText.textContent = " All Resipe"

            // filter favorite resipes

            const favoriteResipes = allResipes.filter(resipe => resipe.favorite);
            displayResipes(favoriteResipes);
        }
        else {
            toggleText.textContent = "Favorite Resipe"
            displayResipes(allResipes);
        }
        // reset search input
        searchForm.search.value = "";
    });
}



