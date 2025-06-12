/* 
Utiliza el método find de array para buscar si se encuentra un producto en nuestro array.
Filtrar los productos siguiendo un criterio por ejemplo que el nombre de un producto contenga una palabra o parte de ella. También puede filtrar por precio, cantidad, etc.
Utilice el método map para actualizar el precio en un 21% agregando el IVA u otro valor de aumento que desee aplicar sobre cada uno de los productos obteniendo un nuevo array de productos actualizado 
*/

/* find */
let productos = [
    {nombre: 'vaso', precio: 2000},
    {nombre: 'pelota', precio: 5000},
    {nombre: 'mando', precio: 10000},
]
let productoBuscado = productos.find((elem) => elem.nombre == 'vaso')
alert("El producto encontrado es: " + productoBuscado.nombre)

/* filter */
let productosCaro = productos.filter((elem) => elem.precio > 7000)
console.log(productosCaro)

/* map */
let productosIva = productos.map((elem) => elem.precio * 1.21)
console.log(productosIva)