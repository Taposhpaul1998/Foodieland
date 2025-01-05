import checkResipes from "../checkResipes";




// check Resipes

// get data from localStorage 
const resipes = JSON.parse(localStorage.getItem('resipes')) || [];
const path = window.location.href
console.log(path);

if (path === "http://localhost:5173/src/pages/blogDetails") {
    checkResipes(resipes)
}