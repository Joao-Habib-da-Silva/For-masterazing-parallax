var navbar = window.document.getElementById("navbar")
var text = window.document.getElementById("text")
var img3 = window.document.getElementById("img3")
function Open() {
    navbar.classList.toggle("open")
}

window.addEventListener("scroll", () => {
    
var value = window.scrollY
text.style.marginTop = value * 2.5 + 'px'

})