const openBtn = document.querySelector(".header__menu");
const closeBtn = document.querySelector(".header__close");
const nav = document.querySelector(".header__nav");
const links = document.querySelectorAll(".header__nav-link");
function onLink() {
    links.forEach((el) => {
        el.addEventListener("click", () => {
            openBtn.classList.toggle("active")
            nav.classList.toggle("active")
            closeBtn.classList.toggle("active")
        })
    })

}

openBtn.addEventListener("click", (e) => {
    openBtn.classList.toggle("active")
    nav.classList.toggle("active")
    closeBtn.classList.toggle("active")
})
closeBtn.addEventListener("click", (e) => {
    openBtn.classList.toggle("active")
    nav.classList.toggle("active")
    closeBtn.classList.toggle("active")
})



if (window.innerWidth <= 768) {
    onLink()
}

