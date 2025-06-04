/* 
    Función que genera un número aleatorio entre 1 y 10.
    El usuario intenta adivinarlo.
    Función aparte compara y muestra si acertó.
*/

function generaNroAzar() {
    let nroAzar
    nroAzar = Math.floor(Math.random() * 11)
    return nroAzar
}

function comparaNumeros(numero, nroAzar) {
    if(numero == nroAzar) {
        alert("Adivinaste el numero")
    } else {
        alert("No adivinaste pendejo")
    }
}

let numero = prompt("Adivine el numero secreto (es del 1 al 10)")
let nroAzar = generaNroAzar() 
comparaNumeros(numero, nroAzar)
console.log(numero)
console.log(nroAzar)