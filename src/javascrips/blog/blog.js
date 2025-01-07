import blogs from "../../../data/blogs.json"
import suggetResipes from "../suggetResipes";
import "./blogDetails"

// check Resipes

// get data from localStorage 
const resipes = JSON.parse(localStorage.getItem('resipes')) || [];

const blogConteiner = document.querySelector(".blogs__list")
const template = document.querySelector("#blog__template")


const renderBlog = (blogs) => {


    if (blogConteiner) {
        // replace 
        blogConteiner.replaceChildren();

        blogs.forEach(blog => {
            const clone = template.content.cloneNode(true);
            clone.querySelector(".blog__main-img").src = `../../${blog.image}`;
            clone.querySelector(".blog__main-img").alt = `${blog.title} image`;
            clone.querySelector(".title").textContent = blog.title;
            clone.querySelector(".blog__date").textContent = blog.date;
            clone.querySelector(".name").textContent = blog.writer.name;
            clone.querySelector(".photo").src = `../../${blog.writer.photo}`;
            clone.querySelector(".photo").alt = `${blog.writer.name} image`;

            clone.querySelector(".single__blog").addEventListener("click", () => {
                window.location.href = `/src/pages/blogDetails?id=${blog.id}`
            })

            blogConteiner.appendChild(clone);

        });
    }

}
renderBlog(blogs)

const searchForm = document.querySelector("#search__blog")

if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const searchValue = searchForm.search.value.toLowerCase().trim();
        const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(searchValue));

        renderBlog(filteredBlogs)
    })
    suggetResipes(resipes)
}
