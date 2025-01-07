import checkResipes from "../checkResipes";
import suggetResipes from "../suggetResipes";

// get data from localStorage 
const data = JSON.parse(localStorage.getItem('resipes')) || [];

// get resipe id from url 
const urlParams = new URLSearchParams(window.location.search);
const resipeId = urlParams.get('id');

// find resipe by id
const resipe = data.find(resipe => resipe.id === resipeId);

if (resipe) {

    const resipeTitle = document.querySelector(".page__title");
    const category = document.querySelector(".category");
    const resipeImg = document.querySelector(".video");

    resipeTitle.innerHTML = `<h1>${resipe.title}</h1>`;
    category.innerHTML = `<span>${resipe.category}</span>`;
    resipeImg.innerHTML = `  <img src="../../${resipe.img}" alt="">`;

    // sugget Resipes 
    suggetResipes(data)

    // check resipes 
    checkResipes(data)
}

