define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict';
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
    var formulario = document.getElementById("formulario");
    formulario.onsubmit = function (event) {
        var rut = document.getElementById("rut");
        if (!validarRut(rut)) {
        }
    };
    function validarRut(rut) {
        var tam;
        var i;
        tam = rut.value.length;
        var digitoVer = (rut.value.charAt(tam - 1));
        if (rut.value.length == 9 || rut.value.length == 10) {
            if ((digitoVer >= "0" && digitoVer <= "9") || (digitoVer == "K" || digitoVer == "k")) {
                if (rut.value.charAt(tam - 2) == '-') {
                    for (i = 0; i < tam - 2; i++) {
                        if (rut.value.charAt(i) < "0" || rut.value.charAt > "9")
                            return false;
                    }
                    return true;
                }
            }
        }
        return false;
    }
    function validarTelefono() {
        var telefono = document.getElementById("telefono");
        if (telefono.value.length != 9)
            return false;
    }
});
