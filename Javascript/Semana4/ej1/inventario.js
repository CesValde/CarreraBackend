/* Usa un array de objetos para representar productos (nombre, stock). */
/* Crea funciones para agregar, eliminar y mostrar productos. */

function agregarProducto(producto) {
    coleccProductos.push(producto)
}

function eliminarProducto(producto) {
    const index = coleccProductos.findIndex(prod => prod.nombre === producto.nombre);
    if(index !== -1) {
        coleccProductos = coleccProductos.splice(index, 1);
        return true
    }
    return false
}

function mostrarProducto(producto) {
    if(coleccProductos.includes(producto)) {
        return producto
    } else {
        alert("No existe ese producto")
    }
}

let coleccProductos = []
let producto = {nombre: "vaso", stock: 20}
/* Agregamos */
agregarProducto(producto)
console.log(coleccProductos)

/* Modicamos */
let res = mostrarProducto(producto)
console.log(res)

/* Eliminamos (no existe) */
res = eliminarProducto("wrfjh")
if(res) {
    alert("Producto eliminado")
} else {
    alert("No existe el producto")
}