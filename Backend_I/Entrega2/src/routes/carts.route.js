import { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { ProductManager } from '../ProductManager.js'
import { CartManager } from '../CartManager.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const pathProduct = path.join(__dirname, '..', 'json', 'products.json')
const pathCarts = path.join(__dirname, '..', 'json', 'carts.json')

const productManager = new ProductManager(pathProduct)
const cartManager = new CartManager(pathCarts, productManager)
let carts = cartManager.getInstance()
const route = Router()

// Ruta carts
route.get('/', (req, res) => {
   carts = cartManager.getCarts()
   res.json({ payload: carts })
})

// Debe listar los productos que pertenecen al carrito con el cid proporcionado.
route.get('/:cid', (req, res) => {
   const result = cartManager.getProductsCartById(req.params.cid)

   if(result.error) return res.status(400).json({ message: result.message })
      res.status(200).json({ message: result.message, cartProducts: result.cartProducts })
})

// Debe crear un nuevo carrito con la siguiente estructura:
// id: Number/String (Autogenerado para asegurar que nunca se dupliquen los ids).
// products: Array que contendrá objetos que representen cada producto.
route.post('/', (req, res) => {
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
route.post('/:cid/product/:pid', (req, res) => {
   const { cid, pid } = req.params
   const result = cartManager.addProductCart(cid, pid)

   if(result.error) return res.status(404).json({ message: result.message })
      res.status(200).json({ message: result.message, cart: result.cartProducts })
})

export default route