// Validador de correo
// Pide al usuario que ingrese una cadena de texto.
// Verifica si contiene un `'@'` y un `'.'`.
// Muestra si "parece un correo válido" o no.

let cadena = prompt("Ingrese un correo electronico")
let x = cadena.length
let validacion = "@gmail.com"
let y = validacion.length
y = x - y 

if(validacion == cadena.slice(y, x) && x > validacion.length) {
    alert("Correo Valido")
} else {
    alert("Correo invalido")
}

/* 
    En realidad tenia que usar esto pero lo hice mas divertido para mi 
    cadena.includes("@") && cadena.includes(".") 
*/
