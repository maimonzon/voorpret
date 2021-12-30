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
    1,
    "valija",
    "https://i.imgur.com/iYilA0H.jpeg",
    20500, 
    true,
    "Alto 73- Ancho 48 - Profundidad 28 cm + 5 cm de fuelle expandible. Peso 4.2 kg");

const producto2 = new Producto (
    2,
    "carry on", 
    "https://i.imgur.com/QRrqK8R.jpeg",
    15000, 
    true,
    "Alto 52 - Ancho 37 - Profundidad 23 cm + 5 cm de fuelle expandible.  Peso 2.5kg  ");

const producto3 = new Producto (
    3,
    "handbag",
    "https://i.imgur.com/Z0Y69Ai.jpeg",
    9000, 
    true,
    "Acceso superior. Bolsillo frontal.Correas regulables. Alto 28 - Ancho 50.");

const producto4 = new Producto (
    4, 
    "mochila", 
    "https://i.imgur.com/ywb48BP.jpeg",
    7500, 
    true,
    "Acceso superior. Bolsillo frontal con organizador interno. Bolsillos laterales.Porta Notebook.");


const productos = []
productos.push(producto1, producto2, producto3, producto4);


// localStorage

localStorage.setItem("productos", JSON.stringify(productos)); 

const productosTurismo = JSON.parse(localStorage.getItem("productos"));

// imprimir los productos en un card HTML

for (const producto of productosTurismo) {
    let cardProd = document.createElement("div")

    cardProd.innerHTML = 
    `
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${producto.nombre} </h5>
          <p class="card-text"> ${producto.descrip} </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> ${producto.id} </li>
          <li class="list-group-item"> $ ${producto.precio} </li>
        </ul>
        <div class="card-body">
          <button> COMPRAR </button>
        </div>
      </div>
  `

    document.getElementById("cards").append(cardProd);

    cardProd.classList.add("card")
