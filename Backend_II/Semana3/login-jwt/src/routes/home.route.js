import { Router } from 'express'
import { requireLogin } from '../middlewares/auth.middleware.js'

const router = Router()

// ruta principal
router.get("/", requireLogin, (req, res) => {
   res.send("Bienvenido a MongoCart!")
}) 

export default router