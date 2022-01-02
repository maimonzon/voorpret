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
    "valija",
    "https://i.pinimg.com/564x/ed/69/02/ed69028d2c5b88730e2f20b6bfb956d0.jpg",
    20500, 
    true,
    "Alto 73- Ancho 48 - Profundidad 28 cm + 5 cm de fuelle expandible. Peso 4.2 kg");

const producto2 = new Producto (
    1002,
    "carry on", 
    "https://i.pinimg.com/564x/9a/81/f9/9a81f909c8307fc246b7d74e6b821954.jpg",
    15000, 
    true,
    "Alto 52 - Ancho 37 - Profundidad 23 cm + 5 cm de fuelle expandible.  Peso 2.5kg");

const producto3 = new Producto (
    1003,
    "handbag",
    "https://i.pinimg.com/564x/1b/d6/43/1bd6431b4db17d75b959a258bceb306f.jpg",
    9000, 
    true,
    "Acceso superior. Bolsillo frontal.Correas regulables. Alto 28 - Ancho 50.");

const producto4 = new Producto (
    1004, 
    "mochila", 
    "https://i.pinimg.com/564x/2a/ca/1a/2aca1a73bab7b83252c731f7528e3e66.jpg",
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
          <button> COMPRAR </button>
        </div>
      </div>
  `

    document.getElementById("cards").append(cardProd);

    cardProd.classList.add("card")
}
