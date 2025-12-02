import { Router } from "express"
import { ProductManager } from "../ProductManager.js"
import { CartManager } from "../CartManager.js"
import { auth } from '../app.js'

const router = Router()
const productManager = new ProductManager()
const cartManager = new CartManager()

// Página principal de productos
router.get("/", auth, async (req, res) => {
   const result = await productManager.getProducts(req.query)
   res.render("index", { products: result.payload, pagination: result })
})

// Vista de carrito
router.get("/cart/:cid", auth, async (req, res) => {
   const { cid } = req.params

   // Llamás al método de tu clase
   const result = await cartManager.getProductsCartById(cid)

   if (result.status !== "success") {
      return res.status(404).render("cart", {
         title: "Carrito no encontrado",
         error: result.error
      })
   }

   // Renderizás la vista pasándole los productos
   res.render("cart", {
      title: "Tu Carrito!",
      cart: result.payload
   })
})

// Login -> hacer por la URL
router.get('/login', (req, res) => {
   const { user, password } = req.query

   if (user !== "cesar" || password !== '8') {
      res.send("User or password incorrect")
   } else {
      req.session.user = user
      req.session.admin = false
      res.send('Login ok')
   }
})

// endpoints para admins
router.get('/zonaprivada', auth, (req, res) => {
   if (req.session.user === "coder" && req.session.admin) {
      res.send('Bienvenido a la zona privada')
   }
   res.send('Debes ser admin')
})

export default router