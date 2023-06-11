/*agregando contenido al index*/
const primeraPresentacion = document.getElementById("lasmejoresmarcas");
primeraPresentacion.innerHTML = "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto aspernatur atque exercitationem iusto ad repudiandae iure asperiores dicta. Sunt quo dolorem doloremque, saepe molestiae quasi quos, reiciendis nemo maxime, dolore eos eum assumenda aliquam distinctio natus laudantium magni ex sapiente.</p>";

const segundaPresentacion = document.getElementById("calidad");
segundaPresentacion.innerHTML = "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto aspernatur atque exercitationem iusto ad repudiandae iure asperiores dicta. Sunt quo dolorem doloremque, saepe molestiae quasi quos, reiciendis nemo maxime, dolore eos eum assumenda aliquam distinctio natus laudantium magni ex sapiente.</p>";

/*const colaless = document.querySelector ("#colaless"); 
colaless.innerText= "Colales";
const bombachas = document.querySelector ("#bombachas");
bombachas.innerText = "Bombachas";
const  tangas = document.querySelector ("#tangas");
tangas.innerText ="Tangas";
const tops = document.querySelector ("#tops");
tops.innerText = "Tops";
*/
const masPopulares = document.querySelector("#masPopulares");

function mostrarMasPopulares() {
  const div = document.createElement("div");
  div.innerHTML = `
  <div
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
            <small class="text-secondary"> ARS $2500 </small>
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
            <small class="text-secondary"> ARS $1000 </small>
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
            <small class="text-secondary"> ARS $3000 </small>
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
            <small class="text-secondary"> ARS $3000 </small>
          </div>
        </div>
      </div>`

}

mostrarMasPopulares()