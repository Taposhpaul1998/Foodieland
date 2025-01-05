import products from "../../data/products.json";

// set logcal storage resipes data 

const resipes = JSON.parse(localStorage.getItem('resipes'))

if (!resipes) {
    window.localStorage.setItem("resipes", JSON.stringify(products))
}