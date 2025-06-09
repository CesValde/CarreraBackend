/*
Array de productos con precio.
*/

/**
 * calcula el total del carrito.
 */
function calculaTotal(carrito) {
    let total = 0
    for(let i=0; i<carrito.length; i++) {
        total += carrito[i].precio
    }
    return total
}

let carrito = [
    {producto: "vaso", precio: 2000},
    {producto: "gaseosa", precio: 2500},
    {producto: "frutas", precio: 4000},
    {producto: "carne", precio: 10000}
]

let total = calculaTotal(carrito)
console.log(total)