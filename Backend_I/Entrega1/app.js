/* 
Descripción General
Desarrollar un servidor que contenga los endpoints y servicios necesarios para gestionar los productos y 
carritos de compra para tu API.

Requisitos de la Primera Entrega
Desarrollo del Servidor

-----------------------------1ra parte----------------------------------------------
El servidor debe estar basado en Node.js y Express, y debe escuchar en el puerto 8080. ✅
Se deben disponer dos grupos de rutas: /products y /carts. Estos endpoints estarán implementados con el 
router de Express, con las siguientes especificaciones: ✅

Rutas para Manejo de Productos (/api/products/)
GET /: 
Debe listar todos los productos de la base de datos. ✅

GET /:pid:
Debe traer solo el producto con el id proporcionado. ✅

POST /:
Debe agregar un nuevo producto con los siguientes campos:
id: Number/String (No se manda desde el body, se autogenera para asegurar que nunca se repitan los ids).✅
title: String
description: String
code: String
price: Number
status: Boolean
stock: Number
category: String
thumbnails: Array de Strings (rutas donde están almacenadas las imágenes del producto).

PUT /:pid:
Debe actualizar un producto por los campos enviados desde el body. 
No se debe actualizar ni eliminar el id al momento de hacer la actualización. ✅

DELETE /:pid:
Debe eliminar el producto con el pid indicado. ✅

-----------------------------2da parte-------------------------------------------
Rutas para Manejo de Carritos (/api/carts/)
POST /:
Debe crear un nuevo carrito con la siguiente estructura:
id: Number/String (Autogenerado para asegurar que nunca se dupliquen los ids).
products: Array que contendrá objetos que representen cada producto. ✅

GET /:cid: ✅
Debe listar los productos que pertenecen al carrito con el cid proporcionado.

POST /:cid/product/:pid:
Debe agregar el producto al arreglo products del carrito seleccionado, utilizando el siguiente formato:
product: Solo debe contener el ID del producto.
quantity: Debe contener el número de ejemplares de dicho producto (se agregará de uno en uno).
Si un producto ya existente intenta agregarse, se debe incrementar el campo quantity de dicho producto.

-------------------------------- IMPORTANTE --------------------------------------------------------
Persistencia de la Información
La persistencia se implementará utilizando el sistema de archivos, donde los archivos products.json y 
carts.json respaldarán la información.

Se debe utilizar el ProductManager desarrollado en el desafío anterior y 
crear un CartManager para gestionar el almacenamiento de estos archivos JSON.

Nota: No es necesario realizar ninguna implementación visual, todo el flujo se puede realizar 
por Postman o por el cliente de tu preferencia.

Formato del Entregable
Proporcionar un enlace al repositorio de GitHub con el proyecto completo, sin la carpeta node_modules.
*/

import express from 'express'
import { ProductManager } from './ProductManager.js'
import { CartManager } from './CartManager.js'

// servidor express
const app = express()
const PORT = 8080 

// Manejo de ProductManager
const pathProduct = "./products.json"
const productManager = new ProductManager(pathProduct)
let products = productManager.getInstance()

// Manejo de CartManager
const pathCarts = "./carts.json"
const cartManager = new CartManager(pathCarts, productManager)
let carts = cartManager.getInstance()

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
app.get('/api/products/', (req, res) => {
    products = productManager.getProducts()
    res.json({ payload: products })
})

// busca un producto por id
app.get('/api/products/:pid', (req, res) => {
    const result = productManager.getProductById(req.params.pid)
    
    if(result.error) return res.status(404).json({ message: result.message, })
        res.status(201).json({ message: result.message, product: result.product })
})

// Debe agregar un nuevo producto con los siguientes campos:
// id: Number/String (No se manda desde el body, se autogenera para asegurar que nunca se repitan los ids).
app.post("/api/products/", (req, res) => {
    const result = productManager.addProduct(req.body)

    if(result.error) return res.status(400).json({ message: result.message, missing: result.missingFields, invalid: result.invalidFields })
        res.status(201).json({ message: result.message, product: result.product })
})

// Debe actualizar un producto por los campos enviados desde el body.  
// No se debe actualizar ni eliminar el id al momento de hacer la actualización.
app.put("/api/products/:pid", (req, res) => {
    const id = req.params.pid               // el id del producto desde la URL
    const updates = req.body                // los campos que vienen en el body
    const result = productManager.modificarProducto(id, updates)

    if(result.error) return res.status(404).json({ message: result.message })
        res.status(200).json({ message: result.message, product: result.product })
})

// Debe eliminar el producto con el pid indicado.
app.delete("/api/products/:pid", (req, res) => {
    const result = productManager.eliminarProducto(req.params.pid)

    if(result.error) return res.status(404).json({ message: result.message })
        res.status(200).json({ message: result.message, product: result.product })
})

// ------------------
// Ruta carts
app.get('/carts', (req, res) => {
    carts = cartManager.getCarts()
    res.json({ payload: carts })
})

// Debe listar los productos que pertenecen al carrito con el cid proporcionado.
app.get('/api/carts/:cid', (req, res) => {
    const result = cartManager.getProductsCartById(req.params.cid)

    if(result.error) return res.status(400).json({ message: result.message })
        res.status(200).json({ message: result.message, cartProducts: result.cartProducts })
})

// Debe crear un nuevo carrito con la siguiente estructura:
// id: Number/String (Autogenerado para asegurar que nunca se dupliquen los ids).
// products: Array que contendrá objetos que representen cada producto.
app.post('/api/carts/', (req, res) => {
    const result = cartManager.createCart(req.body)

    if(result.error) return res.status(400).json({ message: result.message })
        res.status(201).json({ message: result.message, cart: result.cart })
})

/* 
Debe agregar el producto al arreglo products del carrito seleccionado, utilizando el siguiente formato:
product: Solo debe contener el ID del producto.
quantity: Debe contener el número de ejemplares de dicho producto (se agregará de uno en uno).
Si un producto ya existente intenta agregarse, se debe incrementar el campo quantity de dicho producto.
*/
app.post('/:cid/product/:pid', (req, res) => {
    const { cid, pid } = req.params
    const result = cartManager.addProductCart(cid, pid)

    if(result.error) return res.status(404).json({ message: result.message })
        res.status(200).json({ message: result.message, cart: result.cartProducts })
})