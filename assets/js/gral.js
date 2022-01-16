//Animacion del carrito

const comprasBtn = document.querySelector('.btnCarrito');
comprasBtn.addEventListener('click', function () {
    document.getElementById('mySidebar').classList.toggle('active')
})

//Animación del nav-bar
/*
$(document).ready(function () {
console.log("ready");
let scrollVar = 183;
$(window).scroll(function () {
let x = $(this).scrollTop();
if (x > scrollVar) {
    $("#header").addClass("header-scrolled");
} else if (x < scrollVar) {
$("#header").removeClass("header-scrolled");
}
});
});
*/