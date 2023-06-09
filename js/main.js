
/*eliminando el defaul del formulario
let newsLetter = document.getElementById("formulario");
newsLetter.addEventListener("submit", (e) => validacion(e));

function validacion(e) {
    e.preventDefault();
}

let formulario = e.target

*/

const btn = document.querySelector("#myBtn")

btn.addEventListener('click', function () {

    Swal.fire({
        title: 'Muchas gracias!',
        text: 'Te enviaremos todas nuestras novedades!',
    })
})

const usuario = document.querySelector('#')

usuario.addEventListener('click', () => {
    const { value: email } = await Swal.fire({
        title: 'Input email address',
        input: 'email',
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address'
      })
      
      if (email) {
        Swal.fire(`Entered email: ${email}`)
      }

})


