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
    "Valija Maps",
    "https://i.pinimg.com/564x/93/7c/1e/937c1e5a1dcc60a48c559fa24e423b8a.jpg",
    20500, 
    true,
    "Alto 73- Ancho 48 - Profundidad 28 cm + 5 cm de fuelle expandible. Peso 4.2 kg");

const producto2 = new Producto (
    1002,
    "Carry On Plane", 
    "https://i.pinimg.com/564x/9a/81/f9/9a81f909c8307fc246b7d74e6b821954.jpg",
    15000, 
    true,
    "Alto 52 - Ancho 37 - Profundidad 23 cm + 5 cm de fuelle expandible.  Peso 2.5kg");

const producto3 = new Producto (
    1003,
    "Bolso de Mano",
    "https://i.pinimg.com/564x/1b/d6/43/1bd6431b4db17d75b959a258bceb306f.jpg",
    9000, 
    true,
    "Acceso superior. Bolsillo frontal.Correas regulables. Alto 28 - Ancho 50.");

const producto4 = new Producto (
    1004, 
    "Mochila Todo Uso", 
    "https://i.pinimg.com/564x/2a/ca/1a/2aca1a73bab7b83252c731f7528e3e66.jpg",
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
    "Neceser de Viaje Plegable",
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
        <img src="${producto.foto}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${producto.nombre} </h5>
          <p class="card-text"> ${producto.descrip} </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Código: ${producto.id} </li>
          <li class="list-group-item"> $ ${producto.precio} </li>
        </ul>
        <div class="card-body">
          <button type="button" class="btn btn-dark"> COMPRAR </button>
        </div>
      </div>
  `

    document.getElementById("cards").append(cardProd);

    cardProd.classList.add("card")
}


