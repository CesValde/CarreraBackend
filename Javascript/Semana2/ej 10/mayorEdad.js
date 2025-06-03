// Acceso por edad mínima con intentos
// Pide la edad al usuario.
// Si es mayor o igual a 18, permite el acceso.
// Si es menor, niega el acceso.
// Permite hasta 3 intentos antes de mostrar "Acceso bloqueado por intentos fallidos".

let edad = Number(prompt("Ingrese su edad"))
intentos = 1

while(edad < 18 && intentos <= 3) {
    if(edad >= 18) {
        alert("Pase mijo")
    } else if(intentos == 3) {
        alert("Acceso bloqueado")
    } else {
        alert("A dormir mijo")
        edad = Number(prompt("Ingrese su edad"))
    }
    intentos++
}