/* 
    Manejo de Archivos mediante Servidor con Express.
    Crear una clase llamada ProductManager que pueda gestionar productos mediante las operaciones de agregar, consultar, modificar y eliminar
    con persistencia en archivos. Luego, se debe desarrollar un servidor con Express para acceder a las funciones implementadas en la clase ProductManager.

    * Aspectos a Incluir
    - La clase debe contar con una variable this.path, la cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.

    * Formato de los Objetos a Guardar
    Cada producto gestionado debe tener el siguiente formato:
    - id: Se debe incrementar automáticamente, no debe enviarse desde el cuerpo de la petición.
    - title: Nombre del producto.
    - description: Descripción del producto.
    - price: Precio del producto.
    - thumbnail: Ruta de la imagen del producto.
    - code: Código identificador del producto.
    - stock: Número de piezas disponibles.

    * Métodos a Implementar en la Clase ProductManager
    - addProduct
    Debe recibir un objeto con el formato especificado anteriormente, asignarle un id autoincrementable y guardarlo en un arreglo.

    *** Asegúrate de guardar siempre el arreglo en el archivo.

    - getProducts
    Debe leer el archivo de productos y devolver todos los productos en formato de arreglo.

    - getProductById
    Debe recibir un id, leer el archivo de productos, buscar el producto con el id especificado y devolverlo en formato de objeto.

    * Desarrollo del Servidor Express
    * Desarrollar un servidor Express que, en su archivo app.js, importe el archivo que contiene la clase ProductManager.

    * El servidor debe contar con los siguientes endpoints:
    - Ruta /products:       Debe leer el archivo de productos y devolverlos dentro de un objeto.
    - Ruta /products/:pid:  Debe recibir por req.params el pid (Product Id) y devolver sólo el producto solicitado, en lugar de todos los productos. 
*/

import express from 'express'
import { ProductManager } from './ProductManager.js'

// servidor express
const app = express()
const PORT = 8080 

// manejo de ProductManager
const path = "./products.json"
const productManager = new ProductManager(path)
let products = productManager.getInstance()

// middleware para poder trabajar con datos JSON
app.use(express.json())

// iniciar el servidor 
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

// ruta principal 
app.get('/', (req, res) => {
    res.send("Bienvenido!")
})

// lista todos los productos de la base de datos.
app.get('/products/', (req, res) => {
    products = productManager.getProducts()
    res.json({ payload: products })
})

// busca un producto por id
app.get('/api/products/:pid', (req, res) => {
    const result = productManager.getProductById(req.params.pid)
    
    if(result.error) return res.status(404).json({ message: result.message, })
        res.status(201).json({ message: result.message, product: result.product })
})