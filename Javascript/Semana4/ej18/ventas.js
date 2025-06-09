/*
Array de objetos con producto, cantidad y precio unitario.
*/

/**
 * calcula el total por venta y general.
 */
function calcularTotal(carrito) {
    let total = 0
    
    for(let i=0; i<carrito.length; i++) {
        acum = carrito[i].precio * carrito[i].cantidad
        total += acum
    }
    return total
}

let carrito = [
    {producto: 'vaso', cantidad: 2, precio: 3000},
    {producto: 'plato', cantidad: 5, precio: 1000},
    {producto: 'celular', cantidad: 1, precio: 100000},
]

let total = calcularTotal(carrito)
console.log(total)