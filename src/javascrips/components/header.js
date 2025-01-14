const header = `
<div class="container header__continer">
    <a href="/">
        <h4 class="logo">Foodieland<span>.</span></h4>
    </a>
    <div class="navber">
        <ul class="flex navber__list">
            <li><a class="nav__link" href="/">Home</a></li>
            <li><a class="nav__link" href="/src/pages/resipes">Recipes</a></li>
            <li><a class="nav__link" href="/src/pages/blog">Blog</a></li>
            <li><a class="nav__link" href="/src/pages/contact">Contact</a></li>
            <li><a class="nav__link" href="/src/pages/about">About us</a></li>
        </ul>
        <ul class="socile__icon flex">
            <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a></li>
        </ul>
        <div class="xmark__icon">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
    <ul class="socile__icon-mobile flex">
        <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook-f"></i></a></li>
        <li><a href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a></li>
        <li class="bar__icon"><i class="fa-solid fa-bars"></i></li>
    </ul>

</div>
`
const headerElement = document.querySelector("#header")
headerElement.insertAdjacentHTML("afterbegin", header)