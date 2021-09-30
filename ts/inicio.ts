import jquery=require('jquery');

const $:JQueryStatic=jquery;



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event:any) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            console.log("A")
          } else {
            mostrarMensaje();
            event.preventDefault()
            event.stopPropagation()
            console.log("B")
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

/*let formulario:any=document.getElementById("formulario");

formulario.onsubmit = function(event:any) {
  let rut:any = document.getElementById("rut");
  if (!validarRut(rut)) {

  }
}
function validarRut(rut:any) {
  let tam:number;
  let i:number;
  tam=rut.value.length;
  let digitoVer:string=(rut.value.charAt(tam-1));

  if (rut.value.length ==9 || rut.value.length==10) {
    if ((digitoVer>="0" && digitoVer<="9") || (digitoVer== "K" || digitoVer=="k")) {
      if (rut.value.charAt(tam-2)=='-') {
        for(i=0; i<tam-2;i++) {
          if(rut.value.charAt(i)<"0" || rut.value.charAt>"9") return false;
        }
        return true;
      }
    }
  }
  return false;
}

function validarTelefono() {
  let telefono:any=document.getElementById("telefono");
  if (telefono.value.length!=9) return false;
}*/

const div_mensaje:any=document.getElementById("mensaje");
const div_formulario:any=document.getElementById("formulario");
function mostrarMensaje(): void {
  div_mensaje.classList.replace('d-none', 'd-block');
  div_formulario.classList.replace('d-block','d-none');
};
