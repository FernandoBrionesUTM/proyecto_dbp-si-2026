// estoy aprendiendo java script

/* Fernando Briones
   Michael Pinoargote */
var mensaje = "bienvenido anuestra web";
var nombreProducto = 'Producto ABC';
var letraSeleccionada = 'c';
function multiplicar(p1,p2){
    return p1 * p2 ;
}
document.getElementById("demo").innerHTML = multiplicar(4,3);

var boton = document.getElementById("btn-mensaje");
var texto = document.getElementById("texto-mensaje");

function alternarMensaje(){
    if (boton.getAttribute("aria-expanded") == "false") {
        texto.innerHTML = "Un mensaje de prueba";
        boton.setAttribute("aria-expanded", "true");
    } else {
        texto.innerHTML = "";
        boton.setAttribute("aria-expanded", "false");
    }
}

boton.addEventListener("click", alternarMensaje);

var formulario = document.getElementById("formulario");
var estado = document.getElementById("estado-envio");
var campos = ["email", "nombres", "apellidos", "web"];
var nombresCampo = {
    email: "el correo electrónico",
    nombres: "los nombres",
    apellidos: "los apellidos",
    web: "la página web"
};

function mensajeDeError(campo) {
    if (campo.validity.valueMissing) {
        return "Error: escribe " + nombresCampo[campo.id] + ".";
    }
    if (campo.validity.typeMismatch) {
        return "Error: " + nombresCampo[campo.id] + " no tiene un formato válido.";
    }
    return "";
}

function revisarCampo(id) {
    var campo = document.getElementById(id);
    var mensaje = mensajeDeError(campo);
    document.getElementById("error-" + id).innerHTML = mensaje;
    if (mensaje == "") {
        campo.removeAttribute("aria-invalid");
        return true;
    }
    campo.setAttribute("aria-invalid", "true");
    return false;
}

function enviarFormulario(evento) {
    evento.preventDefault();
    var primerError = null;
    for (var i = 0; i < campos.length; i++) {
        if (!revisarCampo(campos[i]) && primerError == null) {
            primerError = document.getElementById(campos[i]);
        }
    }
    if (primerError) {
        estado.innerHTML = "";
        primerError.focus();
    } else {
        estado.innerHTML = "La información se envió correctamente (es una simulación, no se guarda en ningún servidor).";
    }
}

// sin JavaScript queda la validación nativa del navegador (required)
formulario.noValidate = true;
formulario.addEventListener("submit", enviarFormulario);
