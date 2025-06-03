//  Contador de letras en una palabra
// Pide una palabra.
// Cuenta cuántos caracteres tiene **sin usar funciones de strings avanzadas** (simularlo con un bucle).

let palabra = prompt("Ingrese una palabra")
let contador = 0

for(let i=0 ; i < palabra.length ; i++) {
    contador++ 
}

if(palabra.includes(" ")) {
    alert("Por sapo no te cuento nada ahora")
} else {
    alert('La palabra tiene ' + contador + ' caracteres')
}