import { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { ProductManager } from '../ProductManager.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pathProduct = path.join(__dirname, '..', 'json', 'products.json')
const productManager = new ProductManager(pathProduct)

const route = Router()
import { io } from '../app.js'

// lista todos los productos de la base de datos.
route.get('/', (req, res) => {
   const products = productManager.getProducts()
   
   res.status(200).json({ payload: products })
})

// busca un producto por id
route.get('/:pid', (req, res) => {
   const result = productManager.getProductById(req.params.pid)
   
   if(result.error) return res.status(404).json({ message: result.message, })

      const products = productManager.getProducts()
      io.emit('lista_productos', products)

      res.status(201).json({
         message: result.message,
         product: result.product
      })
})

// Debe agregar un nuevo producto con los siguientes campos:
// id: Number/String (No se manda desde el body, se autogenera para asegurar que nunca se repitan los ids).
// emite la lista de productos actualizada a los usuarios en linea
route.post('/', (req, res) => {
   const result = productManager.addProduct(req.body)

   if(result.error) return res.status(400).json({ message: result.message, missing: result.missingFields, invalid: result.invalidFields })

      const products = productManager.getProducts()
      io.emit('lista_productos', products)

      res.status(201).json({
         message: result.message,
         product: result.product
      })
})

// Debe actualizar un producto por los campos enviados desde el body.  
// No se debe actualizar ni eliminar el id al momento de hacer la actualización.
// emite la lista de productos actualizada a los usuarios en linea
route.put("/:pid", (req, res) => {
   const id = req.params.pid               // el id del producto desde la URL
   const updates = req.body                // los campos que vienen en el body
   const result = productManager.modificarProducto(id, updates)

   if(result.error) return res.status(404).json({ message: result.message })

      const products = productManager.getProducts()
      io.emit('lista_productos', products)

      res.status(200).json({
         message: result.message,
         product: result.product
      })
})

// Debe eliminar el producto con el pid indicado.
// emite la lista de productos actualizada a los usuarios en linea
route.delete("/:pid", (req, res) => {
   const result = productManager.eliminarProducto(req.params.pid)

   if(result.error) return res.status(404).json({ message: result.message })

      const products = productManager.getProducts()
      io.emit('lista_productos', products)

      res.status(201).json({
         message: result.message,
         product: result.product
      })
})

export default route