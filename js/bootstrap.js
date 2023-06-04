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