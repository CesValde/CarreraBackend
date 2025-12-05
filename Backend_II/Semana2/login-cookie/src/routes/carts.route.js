import { Router } from 'express'
import { CartManager } from '../CartManager.js'
import { requireLogin } from '../middlewares/auth.middleware.js'

const cartManager = new CartManager()
const router = Router()

router.get('/', requireLogin, async (req, res) => {
   const result = await cartManager.getCarts()
   if (result.status === "error") return res.status(500).json(result)
   res.json(result)
})

router.get('/:cid', requireLogin, async (req, res) => {
   const result = await cartManager.getProductsCartById(req.params.cid)
   if (result.status === "error") return res.status(400).json(result)
   res.json(result)
})

router.post('/', requireLogin, async (req, res) => {
   const result = await cartManager.createCart(req.body)
   if (result.status === "error") return res.status(400).json(result)
   res.status(201).json(result)
})

router.post('/:cid/product/:pid', requireLogin, async (req, res) => {
   const result = await cartManager.addProductCart(req.params.cid, req.params.pid)
   if (result.status === "error") return res.status(400).json(result)
   res.json(result)
})

router.delete('/:cid/products/:pid', requireLogin, async (req, res) => {
   const result = await cartManager.deleteProductCart(req.params.cid, req.params.pid)
   if (result.status === "error") return res.status(400).json(result)
   res.json(result)
})

router.put('/:cid', requireLogin, async (req, res) => {
   const result = await cartManager.updateProductsCart(req.params.cid, req.body)
   if (result.status === "error") return res.status(400).json(result)
   res.json(result)
})

router.put('/:cid/products/:pid', requireLogin, async (req, res) => {
   const { quantity } = req.body
   const result = await cartManager.updateQuantity(req.params.cid, req.params.pid, quantity)
   if (result.status === "error") return res.status(400).json(result)
   res.json(result)
})

router.delete('/:cid', requireLogin, async (req, res) => {
   const result = await cartManager.deleteAllProductsCart(req.params.cid)
   if (result.status === "error") return res.status(400).json(result)
   res.json(result)
})

export default router