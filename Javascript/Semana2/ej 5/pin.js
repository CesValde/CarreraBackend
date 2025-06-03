// Ejercicio 5: Bloqueo por PIN incorrecto**
// Define un PIN correcto (por ejemplo: `4321`).
// Permite al usuario ingresarlo hasta 3 veces.
// Si lo acierta, muestra "PIN correcto".
// Si falla las 3 veces, muestra "Tarjeta bloqueada".

let pinCorrecto = 123
let login = false
let intento = 1

do {
    let pin = prompt("Ingrese su pin")

    if(pin == pinCorrecto) {
        alert("Pin correcto")
        login = true 
    } else if(intento == 3) {
        alert("Tarjeta Bloqueada")
    }
    intento++
} while(login == false && intento <= 3)