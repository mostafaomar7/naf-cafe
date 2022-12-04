let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick= () =>{
    navbar.classList.toggle('active')
    searchform.classList.remove('active')
    cart.classList.remove('active')
}
let searchform = document.querySelector('.search-form')
document.querySelector('.fa-search').onclick= () =>{
    searchform.classList.toggle('active')
    navbar.classList.remove('active')
    cart.classList.remove('active')
}

let cart = document.querySelector('.cart-item-container')
document.querySelector('.fa-shopping-cart').onclick= () =>{
    cart.classList.toggle('active')
    navbar.classList.remove('active')
    searchform.classList.remove('active')
}

window.onscroll=() =>{
    navbar.classList.remove('active')
    searchform.classList.remove('active')
    cart.classList.remove('active')
}