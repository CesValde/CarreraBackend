/*
Clase Producto con precio.
Clase Carrito con método calcularTotal.
Guarda el carrito en localStorage.
*/

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}

class Carrito {
    constructor(arrayProductos) {
        this.arrayProductos = arrayProductos
    } 

    calcularTotal() {
        let total = 0 
        let arrayProductos = this.arrayProductos 

        for(let i=0; i<arrayProductos.length; i++) {
            total += arrayProductos[i].precio * arrayProductos[i].cantidad          
        }
        return total
    }
}

const Producto1 = new Producto('Pelota', 3500, 4)
const carrito = new Carrito([Producto1])

let totalCarrito = carrito.calcularTotal()
localStorage.setItem('carrito', JSON.stringify(carrito))