// Temporizador regresivo
// Pide al usuario un número entero positivo.
// Cuenta regresivamente hasta 0 usando un bucle, mostrando cada número.

let num = Number(prompt("Ingrese un numero positivo"))
while(num == 0 || num < 0) {
    num = Number(prompt("Ingrese un numero positivo"))
}

for(let i = num ; i > -1 ; i--) {
    alert(i)
}