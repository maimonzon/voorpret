//Animacion del carrito

const comprasBtn = document.querySelector('.btnCarrito');
comprasBtn.addEventListener('click', function () {
    document.getElementById('mySidebar').classList.toggle('active')
})



//defino la clase del producto

class Producto {

    constructor(id, nombre, foto, precio, stock, descrip) {
        this.id = id;
        this.nombre = nombre;
        this.foto = foto;
        this.precio = precio;
        this.stock = stock;
        this.descrip = descrip;
    }

    getNombre() {
        return this.nombre;
    }

    getPrecio() {
        return this.precio;
    }

    noStock() {
        this.stock = false;
    }
}

//agrego los productos

const producto1 = new Producto(
    1001,
    "Valija Color",
    "https://i.pinimg.com/564x/9b/0d/34/9b0d341f8c395de044841ec18b4bb3fb.jpg",
    20500, 
    true,
    "Alto 73- Ancho 48 - Profundidad 28 cm + 5 cm de fuelle expandible. Peso 4.2 kg");

const producto2 = new Producto (
    1002,
    "Carry On Plane", 
    "https://i.pinimg.com/originals/c9/2b/ce/c92bceb4f14e000c07f6535b08d7ec72.jpg",
    15000, 
    true,
    "Alto 52 - Ancho 37 - Profundidad 23 cm + 5 cm de fuelle expandible.  Peso 2.5kg");

const producto3 = new Producto (
    1003,
    "Bolso de Mano",
    "https://i.pinimg.com/564x/eb/92/4d/eb924d87da9fc25da9f974beddaade73.jpg",
    9000, 
    true,
    "Acceso superior. Bolsillo frontal.Correas regulables. Alto 28 - Ancho 50.");

const producto4 = new Producto (
    1004, 
    "Mochila Todo Uso", 
    "https://i.pinimg.com/564x/61/8a/27/618a27592f9f80b7b7aa5654d34e80e9.jpg",
    7500, 
    true,
    "Acceso superior. Bolsillo frontal con organizador interno. Bolsillos laterales.Porta Notebook.");

const producto5 = new Producto (
    1005,
    "Neceser Colgante",
    "https://i.pinimg.com/564x/ae/b8/7e/aeb87e47209d33a803e21fc233a03aa9.jpg",
    2460,
    true,
    "Material: Poliester impermeable. - Medidas cerrado: 24 cm largo x 20 cm. - Medidas abierto: 24 cm largo x 44 cm. - Altura bolsillo principal: 18 cm."
);
const producto6 = new Producto (
    1006,
    "Neceser Plegable",
    "https://i.pinimg.com/564x/c2/85/25/c28525ca03696a0b3c0453717e0d2eeb.jpg",
    1450,
    true,

)
const producto7 = new Producto (
    1007,
    "Bolso de Viaje Plegable",
    "https://i.pinimg.com/564x/09/c6/15/09c6156f10d0bbb3b4c4ae27ebba7f4b.jpg",
    2000,
    true,

)
const producto8 = new Producto (
    1008,
    "Neceser Travel",
    "https://i.pinimg.com/564x/1e/85/b5/1e85b5d2eca1c918cb183d55ed1e0390.jpg",
    2500,
    true,

)
const producto9 = new Producto (
    1009,
    "Organizador de ropa interior",
    "https://i.pinimg.com/564x/17/3f/7c/173f7c027893b2891dac4b26b261358a.jpg",
    3100,
    true,

)
const producto10 = new Producto (
    1010,
    "Organizador de Accesorios",
    "https://i.pinimg.com/564x/42/31/d2/4231d2f682c4ecf8eba6078a011372aa.jpg",
    2100,
    true,

)
const producto11 = new Producto (
    1011,
    "KitSpa Krramel",
    "https://i.pinimg.com/564x/c4/70/1c/c4701cf9c6bc3022432d3e7635a2144b.jpg",
    2700,
    true,

)
const producto12 = new Producto (
    1012,
    "Set Organizador de Valija",
    "https://i.pinimg.com/564x/8d/2f/56/8d2f567be658fdf6f30d42252e95d079.jpg",
    2900,
    true,
    
)

const productos = []
productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12);

//productos.reduce


// localStorage

localStorage.setItem("productos", JSON.stringify(productos)); 

const productosTurismo = JSON.parse(localStorage.getItem("productos"));

// imprimir los productos en un card HTML

for (const producto of productosTurismo) {
    let cardProd = document.createElement("div")

    cardProd.className = "card n3";
    cardProd.style = "width: 18rem;";
    cardProd.innerHTML = 
    `
    <div class="card" style="width: 18rem;">
        <img src="${producto.foto}" class="card-img-top" id="imgCard" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${producto.nombre} </h5>
          <p class="card-text"> ${producto.descrip} </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Código: ${producto.id} </li>
          <li class="list-group-item"> $ ${producto.precio} </li>
        </ul>
        <div class="card-body">
          <button type="button" class="btn btn-dark" id="btnComprar"> COMPRAR </button>
        </div>
      </div>
  `

    document.getElementById("cards").append(cardProd);

    cardProd.classList.add("card")
}

let boton = getElementById("btnComprar");

for (let i = 0; boton.length > i; i++) {
    boton[i].addEventListener("click", agregarAlCarrito); 
}

function clickeado(e) {
    console.log(e.target);
    e.target.style.opacity = "0.8";
    e.target.style.backgroundColor = "red"; 
    e.target.innerHTML = "Comprado"; 
}

let carrito = [];


