//SEGUNDA ENTREGA
class Produto {
    constructor (codigo, nombre, genero, talle, costo, precioDeVenta) {
        this.codigo = codigo; 
        this.nombre = nombre; 
        this.genero = genero; 
        this.talle = talle;
        this.costo =costo; 
        this.precioDeVenta = parseFloat(precioDeVenta);

    }
}

Comprobaciones

const IVA = 1.21; 
const margenDeGanancia = 1.30;

let arrayProductos = [];
do {
    let comprobacion = prompt ("Ingrese en nombre del producto o ESC para terminar de agregar productos");
    if ((comprobacion === "ESC") || (comprobacion === "esc")) {
        break;
    } else {
        while (comprobacion == "") {
            comprobacion = prompt ("Ingrese en nombre del producto");
        }
    } nombreP = comprobacion; 
    let CodigoP = prompt ("Ingrese en código del producto");
    while (codigoP == "") {
        codigoP = prompt ("Ingrese en código del producto");
    }
    let generoP = prompt  ("Ingrese el genero. M: Masculino y F: femenino");
    while ((generoP != "M") || (genero != "F")) {
        generoP = prompt ("Ingrese el genero. M: Masculino y F: femenino");
    }
    let talleP = prompt ("Ingrese el talle. Recuerde que las siglas son en ingles: S: pequeño M: Mediano L:Grande XL: Extragrande");
    while ((talleP != "M") || (generoP != "F")); {
        talleP = prompt ("Ingrese el talle. Recuerde que las siglas son en ingles: S: pequeño M: Mediano L:Grande XL: Extragrande");
    }
    let costoP = prompt ("Ingrese el costo");
    if (costoP<100) {
        console.log ("Revisa el costo ingresado");
        costoP = prompt ("Ingrese el costo");
    } else {
        precioDeVentaP = costoP * IVA * margenDeGanancia; 
    }
    arrayProductos.push (new Producto (nombreP, CodigoP, generoP, talleP, costoP, precioDeVenta));
} while ((comprobacion === "ESC") || (comprobacion === "esc"));

//Recorrer el array

arrayProductos.map ((a, i) => {
    console.log (`$(i): $(p)`); 
})

/*TERCERA ENTREGA*/

//DOM

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

/*
const primeraPresentacion = document.getElementById("lasMejoresMarcas");
lasMejoresMarcas.innerHTML = "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto aspernatur atque exercitationem iusto ad repudiandae iure asperiores dicta. Sunt quo dolorem doloremque, saepe molestiae quasi quos, reiciendis nemo maxime, dolore eos eum assumenda aliquam distinctio natus laudantium magni ex sapiente.</p>";


const segundaPresentacion = document.querySelector ("#calidad");
const calidad = document.createElement ("p");

calidad.innerHTML = "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto aspernatur atque exercitationem iusto ad repudiandae iure asperiores dicta. Sunt quo dolorem doloremque, saepe molestiae quasi quos, reiciendis nemo maxime, dolore eos eum assumenda aliquam distinctio natus laudantium magni ex sapiente.</p>";

presentacion.append (calidad);


document.body.onload = primeraPresentacion;

function primeraPresentacion () {
    let newDiv = document.createElement("p");
    let newContent =document.createElement ("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto aspernatur atque exercitationem iusto ad repudiandae iure asperiores dicta. Sunt quo dolorem doloremque, saepe molestiae quasi quos, reiciendis nemo maxime, dolore eos eum assumenda aliquam distinctio natus laudantium magni ex sapiente.");
    newDiv.appendChild(newContent);

    let currentDiv =document.getElementById ("lasMejoresMarcas");
    document.body.insertBefore(newDiv, currentDiv);
}

*/

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


