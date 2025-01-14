const footer = `
<div class="container">
    <div class="footer__menu flex">
        <div class="lego__text wow animate__slideInLeft" data-wow-duration="1s">
            <a href="/">
                <h4 class="logo">Foodieland<span>.</span></h4>
            </a>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
        </div>
        <ul class="navber__list navber__list--footer flex wow animate__slideInRight" data-wow-duration="1s">
            <li><a href="/src/pages/resipes">Resipes</a></li>
            <li><a href="/src/pages/blog">Blog</a></li>
            <li><a href="/src/pages/contact">Contact</a></li>
            <li><a href="/src/pages/about">About Us</a></li>
        </ul>
    </div>
    <div class="footer__social wow animate__slideInUp" data-wow-duration="1s">
        <p>&copy; 2020 Flowbase. Powered by <span>Webflow</span></p>
        <ul class="socile__icon footer__social--icon">
            <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a></li>
        </ul>
    </div>
</div>
<!-- scrall up button  -->
<div class="scrollup__btn">
    <i class="fa-solid fa-angle-up"></i>
</div>
`

const footerElement = document.querySelector("#footer")

footerElement.insertAdjacentHTML("afterbegin", footer)