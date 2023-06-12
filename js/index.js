/*agregando contenido al index*/
const primeraPresentacion = document.getElementById("lasmejoresmarcas");
primeraPresentacion.innerHTML = "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto aspernatur atque exercitationem iusto ad repudiandae iure asperiores dicta. Sunt quo dolorem doloremque, saepe molestiae quasi quos, reiciendis nemo maxime, dolore eos eum assumenda aliquam distinctio natus laudantium magni ex sapiente.</p>";

const segundaPresentacion = document.getElementById("calidad");
segundaPresentacion.innerHTML = "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto aspernatur atque exercitationem iusto ad repudiandae iure asperiores dicta. Sunt quo dolorem doloremque, saepe molestiae quasi quos, reiciendis nemo maxime, dolore eos eum assumenda aliquam distinctio natus laudantium magni ex sapiente.</p>";


const masPopulares = document.querySelector("#masPopulares");
const masVendidos = document.querySelector("#masVendidos");
const headerIndex = document.querySelector("#headerIndex")

masPopulares.innerHTML = `<div
class="d-flex justify-content-between align-items-center flex-column flex-lg-row my-5"
id="nuevo"
>
<div class="card m-2" style="width: 15rem">
  <a href="paginas/producto.html">
    <img
      src="imgs/index/bombachas1.jpg"
      alt=""
      class="card-img-top"
      height="300"
      alt="Producto"
    />
  </a>
  <div class="card-body">
    <p id="colaless" class="card-text fw-bold"></p>
    <small class="text-secondary"> colaless </small>
  </div>
</div>
<div class="card m-2" style="width: 15rem">
  <a href="paginas/producto.html">
    <img
      src="imgs/index/bombachas2.jpg"
      alt=""
      class="card-img-top"
      height="300"
      alt="Producto"
    />
  </a>
  <div class="card-body">
    <p id="bombachas" class="card-text fw-bold"></p>
    <small class="text-secondary"> bombachas </small>
  </div>
</div>
<div class="card m-2" style="width: 15rem">
  <a href="paginas/producto.html">
    <img
      src="imgs/index/bombachas3.jpg"
      alt=""
      class="card-img-top"
      height="300"
      alt="Producto"
    />
  </a>
  <div class="card-body">
    <p id="tangas" class="card-text fw-bold"></p>
    <small class="text-secondary"> tangas </small>
  </div>
</div>
<div class="card m-2" style="width: 15rem">
  <a href="paginas/producto.html">
    <img
      src="imgs/index/corpiño.jpg"
      alt=""
      class="card-img-top"
      height="300"
      alt="Producto"
    />
  </a>
  <div class="card-body">
    <p id="tops" class="card-text fw-bold"></p>
    <small class="text-secondary"> tops </small>
  </div>
</div>`


masVendidos.innerHTML = ` 
 <div class="container position-relative text-center">       
<div
class="d-flex justify-content-between align-items-center flex-column flex-lg-row my-5"
>
<div class="position-relative m-2">
  <img src="imgs/index/body.jpg" height="300" alt="body" />
  <a
    href="#"
    class="btn btn-light position-absolute start-0 bottom-0 ms-2 mb-2 d-block"
    >Bodys</a
  >
</div>
<div class="position-relative m-2">
  <img src="imgs/index/conjuntos.jpg" height="300" alt="conjuntos" />
  <a
    href="#"
    class="btn btn-light position-absolute start-0 bottom-0 ms-2 mb-2 d-block"
    >Conjuntos</a
  >
</div>
<div class="position-relative m-2">
  <img src="imgs/index/deportiva.jpg" height="300" alt="ropa deportiva" />
  <a
    href="#"
    class="btn btn-light position-absolute start-0 bottom-0 ms-2 mb-2 d-block"
    >Ropa deportiva</a
  >
</div>
</div>
`
headerIndex.innerHTML = `
<nav
class="navbar navbar-expand-lg bg-light fixed-top top-0 start-0 w-100"
>
<div class="container">
  <a class="navbar-brand d-lg-none" href="../index.html">GINGER</a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbar"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse p-2 flex-column" id="navbar">
    <div
      class="d-flex justify-content-center justify-content-lg-between flex-column p-2 flex-lg-row w-100"
    >
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Buscar"
        />
        <button class="btn btn-outline-dark" type="submit">
          <i class="bi bi-search"></i>
        </button>
      </form>
      <a class="navbar-brand d-none d-lg-block" href="../index.html"
        >GINGER</a
      >
      <ul class="navbar-nav">
        <li class="nav-item d-flex align-items-center">
          <a id="usuario" class="nav-link mx-2" href="#">
            <i class="bi bi-person-fill"></i> Mi cuenta
          </a>
        </li>
        <li class="nav-item d-flex align-items-center">
          <a class="nav-link mx-2" href="#">
            <i class="bi bi-bag-fill"></i>
            Bolsa
          </a>
          <span class="badge rounded-pill bg-secondary"> 0 </span>
        </li>
      </ul>
    </div>
    <div class="d-block w-100">
      <ul
        class="navbar-nav d-flex justify-content-center align-items-center pt-3"
      >
        <li class="nav-item mx-2">
          <a href="paginas/ropaInterior.html" class="nav-link">Ropa interior</a>
        </li>
        <li class="nav-item mx-2">
          <a href="paginas/accesorios.html" class="nav-link">Accesorios</a>
        </li>
        <li class="nav-item mx-2">
          <a href="#" class="nav-link"
            >Sobre Nosotras</a
          >
        </li>
        <li class="nav-item mx-2">
          <a href="paginas/blog.html" class="nav-link">Blog</a>
        </li>
        <li class="nav-item mx-2">
          <a href="paginas/contacto.html" class="nav-link">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</div>
</nav>
`
const btn = document.querySelector("#myBtn")

btn.addEventListener('click', function () {

    Swal.fire({
        title: 'Muchas gracias!',
        text: 'Te enviaremos todas nuestras novedades!',
    })
})

const footer = document.querySelector("#footer");

footer.innerHTML = `
<ul class="nav flex-column">
<li class="fw-bold nav-item">
  <a href="" class="nav-link text-dark">Productos</a>
</li>
<li class="nav-item">
  <a href="paginas/ropaInterior.html" class="nav-link text-muted">Ropa Interior</a>
</li>
<li class="nav-item">
  <a href="paginas/accesorios.html" class="nav-link text-muted"
    >Accesorios</a
  >
</li>
</ul>
<ul class="nav flex-column">
<li class="fw-bold nav-item">
  <a href="" class="nav-link text-dark">Ayuda</a>
</li>
<li class="nav-item">
  <a href="" class="nav-link text-muted">Como comprar</a>
</li>
<li class="nav-item">
  <a href="" class="nav-link text-muted">Plazos de entrega</a>
</li>
<li class="nav-item">
  <a href="" class="nav-link text-muted">Atención al cliente</a>
</li>
</ul>
<ul class="nav flex-column">
<li class="fw-bold nav-item">
  <a href="" class="nav-link text-dark">Información</a>
</li>
<li class="nav-item">
  <a href="" class="nav-link text-muted">Sobre Nosotras</a>
</li>
<li class="nav-item">
  <a href="paginas/blog.html" class="nav-link text-muted">Blog</a>
</li>
</ul>
<ul class="nav flex-column">
<li class="fw-bold nav-item">
  <a href="" class="nav-link text-dark">Términos y Condiciones</a>
</li>
<li class="nav-item">
  <a href="" class="nav-link text-muted">Aviso legal</a>
</li>
<li class="nav-item">
  <a href="" class="nav-link text-muted">Cambios y devoluciones</a>
</li>
<li class="nav-item">
  <a href="" class="nav-link text-muted">Política de Privacidad</a>
</li>
<li class="nav-item">
  <a href="" class="nav-link text-muted">Política de Cookies</a>
</li>
</ul>
`