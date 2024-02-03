const menu = document.querySelector("#hamburger-menu");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
document.querySelector('#hamburger-menu').onclick = () => {
    navbar.classList.toggle("active")
}

document.addEventListener('click',(e) => {
    if(!menu.contains(e.target) && !menu.contains(e.target)) {
        navbar.classList.remove("active")
    }
})

window.onscroll = function() {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        header.classList.add("header-scroll-active") 
    } else {
        header.classList.remove("header-scroll-active") 
        
    }

}