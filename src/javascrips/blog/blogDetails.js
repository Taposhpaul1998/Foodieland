import checkResipes from "../checkResipes";
import blogs from "../../../data/blogs.json"


const urlParams = new URLSearchParams(window.location.search)

const blogId = urlParams.get('id');
const blog = blogs.find(blog => blog.id === blogId)

// check Resipes

// get data from localStorage 
const resipes = JSON.parse(localStorage.getItem('resipes')) || [];

if (blog) {
    const title = document.querySelector(".page__title")
    const shapeImg = document.querySelector(".shape__img")
    const shapeNameDate = document.querySelector(".shape__name")
    const blogImg = document.querySelector(".blog__img")

    title.innerHTML = `<h1>${blog.title}</h1>`
    shapeImg.innerHTML = `<img src="../../${blog.writer.photo}" alt="${blog.writer.name} image">`
    shapeNameDate.innerHTML = ` <h6>${blog.writer.name}</h6>
                        <span>${blog.date}</span>`
    blogImg.innerHTML = `<img src="../../${blog.image}" alt="${blog.title} image">`

    checkResipes(resipes)
}