const subcription = `
<div class="container subscribe__wrapper--container">
    <div class="subscribe__title ">
        <div class="section__title wow animate__slideInUp" data-wow-duration="1s">
            <h2>Deliciousness to your inbox</h2>
        </div>
        <div class="section__discription wow animate__slideInUp" data-wow-duration="1s">
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqut enim ad minim </p>
        </div>
    </div>
    <form id="subscribeForm" class="subscribe__input wow animate__slideInUp" data-wow-duration="1s">
        <input type="email" id="email" placeholder="Your email address...">
        <button type="submit" class="btn subscribe__btn ">Subscribe</button>
    </form>
    <img class="subscribe__bg--left wow animate__slideInLeft" data-wow-duration="1.5s"
        src="../../assets/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png"
        alt="">
    <img class="subscribe__bg--right wow animate__slideInRight" data-wow-duration="1.5s"
        src="../../assets/Photo-subscribe-bg.png" alt="">
</div>
`

const subcriptionElement = document.querySelector("#subscribe")
subcriptionElement.insertAdjacentHTML("afterbegin", subcription)