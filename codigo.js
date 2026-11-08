// Fernando Briones
// Michael Pinoargote

function multiplicar(a, b) {
    return a * b;
}

document.getElementById("demo").textContent = multiplicar(4, 3);

/* Mensaje que se muestra y se oculta con el botón */
const botonMensaje = document.getElementById("btn-mensaje");
const textoMensaje = document.getElementById("texto-mensaje");

function alternarMensaje() {
    const abierto = botonMensaje.getAttribute("aria-expanded") === "true";
    textoMensaje.textContent = abierto ? "" : "Un mensaje de prueba";
    botonMensaje.setAttribute("aria-expanded", String(!abierto));
}

botonMensaje.addEventListener("click", alternarMensaje);

/* Validación del formulario con mensajes de error en texto */
const formulario = document.getElementById("formulario");
const estado = document.getElementById("estado-envio");
const campos = ["email", "nombres", "apellidos", "web"];
const nombresCampo = {
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
    const campo = document.getElementById(id);
    const mensaje = mensajeDeError(campo);
    document.getElementById("error-" + id).textContent = mensaje;
    if (mensaje === "") {
        campo.removeAttribute("aria-invalid");
        return true;
    }
    campo.setAttribute("aria-invalid", "true");
    return false;
}

function enviarFormulario(evento) {
    evento.preventDefault();
    let primerError = null;
    for (const id of campos) {
        if (!revisarCampo(id) && primerError === null) {
            primerError = document.getElementById(id);
        }
    }
    if (primerError) {
        estado.textContent = "";
        primerError.focus();
    } else {
        estado.textContent = "La información se envió correctamente (es una simulación, no se guarda en ningún servidor).";
    }
}

// sin JavaScript queda la validación nativa del navegador (required)
formulario.noValidate = true;
formulario.addEventListener("submit", enviarFormulario);
