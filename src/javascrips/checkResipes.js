export default function checkResipes(resipes) {

    const resipesContainer = document.querySelector(".check__out-cards");
    const template = document.querySelector("#check__template");

    const moreResipes = resipes.slice(8, 12);

    moreResipes.forEach(resipe => {
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

        resipesContainer.appendChild(clone);
    });

}