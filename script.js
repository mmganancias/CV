const contenedorProductos = document.querySelector("#contenedor-productos");

const mostrarProductos = (data) => {
    data.forEach (producto =>{
        const cardProducto = document.createElement("article");
        cardProducto.setAttribute("id", "tarjeta-producto");
        cardProducto.innerHTML = `
        <div class= "card m-2" style="width: 15rem">
            <a href="producto.html">
              <img
                src="${producto?.imagen}"
                class="card-img-top"
                height="300"
                alt="${producto?.nombre}"
               />
            </a>
            <div class="card-body">
              <p class="card-text fw-bold">${producto?.nombre}</p>
              <small class="text-secondary">${producto?.precioDeVenta}</small>
              <button id= "${producto.codigo}" class="btn-compra">Comprar</button>
            </div>
        </div> 
        `;
        contenedorProductos.appendChild(cardProducto);
    })
    const btnComprar = document.querySelectorAll(".btn-compra");
    btnComprar.forEach(el => {
        el.addEventListener("click", (e) =>{
            agregarAlCarrito(e.target.id)
        });
    })
}

mostrarProductos(productos);

const carrito = [];

function agregarAlCarrito(id){

    let prodEncontrado = productos.find(prod => prod.id ===parseInt(id));

    carrito.push(prodEncontrado);
}


const contenido = document.querySelector (".card-body");

contenido.classList.add("producto");


const colaless = document.querySelector ("#colaless"); 

colaless.innerText= "Colales";

const bombachas = document.querySelector ("#bombachas");

bombachas.innerText = "Bombachas";

const  tangas = document.querySelector ("#tangas");

tangas.innerText ="Tangas";

const tops = document.querySelector ("#tops");

tops.innerText = "Tops";


document.body.onload = primeraPresentacion;

function primeraPresentacion () {
    let newDiv = document.createElement("p");
    let newContent =document.createElement ("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto aspernatur atque exercitationem iusto ad repudiandae iure asperiores dicta. Sunt quo dolorem doloremque, saepe molestiae quasi quos, reiciendis nemo maxime, dolore eos eum assumenda aliquam distinctio natus laudantium magni ex sapiente.");
    newDiv.appendChild(newContent);

    let currentDiv =document.getElementById ("lasMejoresMarcas");
    document.body.insertBefore(newDiv, currentDiv);
}

//EVENTOS

let newsLetter = document.getElementById("formulario");
newsLetter.addEventListener("submit", validacion);

function validacion(e) {
    e.preventDefault();
}
let formulario = e.target

class Carrito {
    constructor (codigo, nombre, genero, talle, costo, precioDeVenta) {
        this.codigo = codigo; 
        this.nombre = nombre; 
        this.genero = genero; 
        this.talle = talle;
        this.costo =costo; 
        this.precioDeVenta = parseFloat(precioDeVenta);

    }
}

localStorage.setItem("Carrito", JSON.stringify(Carrito));

const carritoEnLs =JSON.parse(localStorage.getItem("Carrito"));


