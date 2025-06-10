/* Crea un array de objetos de productos, dentro de las propiedades de sus objetos agrega las siguientes (id, nombre, precio, cantidad, subtotal) */

class Producto {
    constructor(id, nombre, precio, cantidad) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.subTotal = this.calcularTotal()
    }

    calcularTotal() {
        return this.precio * this.cantidad
    }

    mostrarProducto() {
        return `id: ${this.id}, Nombre: ${this.nombre}, Precio: ${this.precio}, Cantidad: ${this.cantidad}, SubTotal: ${this.subTotal}`
    }
}

/* esta bien recibirlo por parametro? */
/**
 * Guarda el producto recibido por parametro a la coleccion 
 * @param {object} producto 
 */
function agregarProducto(producto) {
    coleccProductos.push(producto)
}

let coleccProductos = []

// Crear un nuevo objeto Producto (podrias pedir los datos por prompt)
const producto = new Producto(1, "Vaso", 2500, 3);
agregarProducto(producto)
console.log(producto.mostrarProducto());
console.log(coleccProductos)