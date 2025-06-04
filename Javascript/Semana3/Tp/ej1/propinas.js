/* 
    Crea una función que reciba el total de una cuenta y el porcentaje de propina.
    Devuelve el monto total a pagar.
    Simula el uso en un restaurante.
*/

function calcularPago(monto, propina) {
    let total
    total = monto + ((monto * propina) / 100)
    return total
}

let total = calcularPago(1000, 20)
alert("El total es de: " + total)