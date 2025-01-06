export default function suggetResipes(resipes) {

    const resipesContainer = document.querySelector(".suggest__resipes-list");
    const template = document.querySelector("#suggest__resipes-template");

    const moreResipes = resipes.slice(5, 8);

    moreResipes.forEach(resipe => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".suggest__single--img").src = `../../${resipe.img}`;
        clone.querySelector(".restipe__title").textContent = `${resipe.title.length > 38 ? resipe.title.slice(0, 31) + "..." : resipe.title}`;

        clone.querySelector(".suggest__single--resipe").addEventListener("click", (e) => {

            window.location.href = `/src/pages/resipeDetails?id=${resipe.id}`
        });

        resipesContainer.appendChild(clone);
    });

}