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
