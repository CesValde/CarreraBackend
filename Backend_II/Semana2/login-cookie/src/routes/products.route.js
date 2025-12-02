import { Router } from 'express'
import { ProductManager } from '../ProductManager.js'
import { auth } from '../app.js'

export const productManager = new ProductManager()
const router = Router()

router.get('/', async (req, res) => {
   const result = await productManager.getProducts(req.query)
   if (result.status === "error") return res.status(500).json(result)
   res.status(200).json(result)
})

router.get('/:pid', async (req, res) => {
   const { pid } = req.params
   const result = await productManager.getProductById(pid)
   if (result.status === "error") return res.status(400).json(result)
   res.status(200).json(result)
})

router.post('/', auth, async (req, res) => {
   const result = await productManager.addProduct(req.body)
   if (result.status === "error") return res.status(400).json(result)
   res.status(201).json(result)
})

router.put("/:pid", auth, async (req, res) => {
   const { pid } = req.params
   const result = await productManager.updateProduct(pid, req.body)
   if (result.status === "error") return res.status(400).json(result)
   res.status(200).json(result)
})

router.delete("/:pid", auth, async (req, res) => {
   const { pid } = req.params
   const result = await productManager.deleteProduct(pid)
   if (result.status === "error") return res.status(400).json(result)
   res.status(200).json(result)
})

export default router