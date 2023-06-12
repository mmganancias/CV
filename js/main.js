
/*eliminando el defaul del formulario
let newsLetter = document.getElementById("formulario");
newsLetter.addEventListener("submit", (e) => validacion(e));

function validacion(e) {
    e.preventDefault();
}

let formulario = e.target

const usuario = document.querySelector('#')

usuario.addEventListener('click', async () => {
    const { value: email } = await Swal.fire({
        title: 'Input email address',
        input: 'email',
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address'
      })
      
      if (email) {
        Swal.fire(`Entered email: ${email}`)
      }

})*/

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
const header = document.querySelector("#header");

header.innerHTML = `
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
                  <a href="#" class="nav-link">Ropa interior</a>
                </li>
                <li class="nav-item mx-2">
                  <a href="accesorios.html" class="nav-link">Accesorios</a>
                </li>
                <li class="nav-item mx-2">
                  <a href="sobreNosotras.html" class="nav-link"
                    >Sobre Nosotras</a
                  >
                </li>
                <li class="nav-item mx-2">
                  <a href="blog.html" class="nav-link">Blog</a>
                </li>
                <li class="nav-item mx-2">
                  <a href="contacto.html" class="nav-link">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
`