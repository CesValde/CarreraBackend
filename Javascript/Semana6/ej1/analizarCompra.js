/* 
Clase Compra con producto, cantidad y precio.
Clase HistorialCompras con método totalGastado() usando reduce.
Guarda historial en localStorage. 
*/

class Compra {
    constructor(producto, cantidad, precio) {
        this.producto = producto
        this.cantidad = cantidad
        this.precio = precio
    }

}

class HistorialCompra {
    constructor(compras) {
        this.compras = compras
    }

    totalGastado() {
        let totalGastado = 0

        totalGastado = this.compras.reduce((acum, compra) => {
            return acum + compra.precio * compra.cantidad
        }, 0)
        return totalGastado
    }
}

let historial = [
    {producto: 'vaso', cantidad: 20, precio: 1000},
    {producto: 'pelota', cantidad: 5, precio: 3000},
    {producto: 'celular', cantidad: 2, precio: 10000},
    {producto: 'pc', cantidad: 1, precio: 50000},
    {producto: 'mando', cantidad: 10, precio: 5000},
] 

let historialCompra = new HistorialCompra(historial)
let totalGastado = historialCompra.totalGastado()
console.log(totalGastado)

localStorage.setItem('historial', totalGastado)
