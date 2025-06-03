// Ejercicio 3: Simulación de intentos de login (máximo 3)
// Permite al usuario intentar ingresar usuario y contraseña hasta 3 veces.
// Si acierta, muestra "Acceso concedido".
// Si falla 3 veces, muestra "Cuenta bloqueada".

let user = "Cesar"
let pass = 123
let login = false
let intento = 1

do {
    let usuario = prompt("Ingrese su usuario")
    let password = prompt("Ingrese su contraseña")

    if(usuario == user && pass == password) {
        alert("Acceso concedido")
        login = true 
    } else {
        alert("Acceso denegado")
        intento++
    }
} while(intento <= 3 && login == false)