// get resipes form localStorage 

let resipes = JSON.parse(localStorage.getItem('resipes')) || [];


// resipes page 
const resipesContainer = document.querySelector(".resipes__container");

if (resipesContainer) {
    const resipesCards = document.querySelector(".resipes__cards");
    const template = document.querySelector("#resipe__template");

    resipes.forEach((resipe) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".cart__img").src = `../../${resipe.img}`;
        clone.querySelector(".cart__title").textContent = resipe.title;
        clone.querySelector(".category").textContent = resipe.category;

        clone.querySelector(".fa-heart").classList.add(resipe.favorite && "favorite__cart");

        clone.querySelector(".single__cart").addEventListener("click", (e) => {
            console.log(e.target);


            // window.location.href = `/src/pages/resipeDetails?id=${resipe.id}`
        });

        resipesCards.appendChild(clone);
    })

}


