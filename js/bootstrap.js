const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");

function mostrarProductos(productosSeleccionados) {

    contenedorProductos.innerHTML= "";

    productosSeleccionados.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div class="col col-9 d-flex flex-wrap justify-content-between">
          <div class="producto" class= "card m-2" style="width: 16rem">
            <a href=${producto.nombre}">
                <img
                  src="${producto.imagen}"
                  class="card-img-top"
                  height="300"
                  alt="${producto.nombre}"
               />
             </a>
              <div class="card-body">
                <p class="card-text fw-bold">${producto.nombre}</p>
                <small class="text-secondary">${producto.precioDeVenta}</small>
              </div>
              <button id= "${producto.codigo}" class="btn-compra">Comprar</button>
          </div>
        </div>`
        contenedorProductos.appendChild(div);
    })
}

mostrarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        
        const productoCategoria = productos.filter(producto => producto.categoria.nombre === e.currentTarget.id);
        mostrarProductos(productoCategoria);

    })
})

