/* 
Consigna
Crear una clase llamada ProductManager que gestione un conjunto de productos.

Aspectos a Incluir
La clase debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.

Cada producto gestionado debe contar con las siguientes propiedades:
title (nombre del producto)
description (descripción del producto)
price (precio)
thumbnail (ruta de imagen)
code (código identificador)
stock (número de piezas disponibles)

Métodos a Implementar

- addProduct
Este método debe agregar un producto al arreglo de productos inicial.
Debe validar que no se repita el campo code y que todos los campos sean obligatorios.
Al agregar un producto, debe crearse con un id autoincrementable.

- getProducts
Este método debe devolver el arreglo con todos los productos creados hasta el momento.

- getProductById
Este método debe buscar en el arreglo el producto que coincida con el id.

En caso de no encontrar ningún id coincidente, debe mostrar en consola el error "Not found".
*/

class ProductManager {
    constructor() {
        this.products = []  
    }   

    addProduct(title, description, price, thumbnail, stock) {
        const code = this.products.length + 1;
        const nuevoProducto = {title, description, price, thumbnail, code, stock};
        this.products.push(nuevoProducto);
    }
    
    getProducts() {
        return this.products
    }

    getProductById(id) {
        const product = this.products.find(product => product.code == id)
        return product || "Not found"
    }
}

/* Creamos la instancia y pedimos los productos (no hay aun) */
const productManager = new ProductManager();
let products = productManager.getProducts()
console.log(products);

/* Agrego dos productos */
productManager.addProduct("Pelota de Plata", "Pelota nro 5", 10000, "foto pelota", 100);
productManager.addProduct("Hollow Knight Silksong", "Juego PS5", 30000, "foto HK.Silksong", 200);

/* Obetengo el array con los productos */
products = productManager.getProducts()
console.log(products);

/* Pido el producto por el id */
const product = productManager.getProductById(2)
console.log(product)