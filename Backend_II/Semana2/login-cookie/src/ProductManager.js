import mongoose from "mongoose"
import { productsModel } from './models/products.model.js'

export class ProductManager {
   // Obtiene los productos de la base de datos
   async getProducts(queryParams = {}) {
      try {
         const {
            limit = 10,
            page = 1,
            category,
            status,
            query,
            sort
         } = queryParams

         const filter = {}

         // filtra sea mayus o minus
         if (category) filter.category = { $regex: `^${category}$`, $options: "i" }
         if (status !== undefined) filter.status = status === 'true'

         if (query) {
            filter.$or = [
               { title: { $regex: query, $options: "i" } },
               { description: { $regex: query, $options: "i" } },
               { category: { $regex: query, $options: "i" } }
            ]
         }

         // evalua las opciones y filtra por precio si esta en la url
         const options = {
            page: Number(page),
            limit: Number(limit),
            /* page,
            limit, */
            lean: true,
            sort: sort === "asc" ? { price: 1 } :
               sort === "desc" ? { price: -1 } : {}
         }

         const result = await productsModel.paginate(filter, options)

         return {
            status: "success",
            payload: result.docs,
            totalPages: result.totalPages,
            prevPage: result.prevPage,
            nextPage: result.nextPage,
            page: result.page,
            hasPrevPage: result.hasPrevPage,
            hasNextPage: result.hasNextPage
         }
      } catch (error) {
         return { status: "error", error: "Internal server error" }
      }
   }

   // retorna un producto en base a su id
   async getProductById(pid) {
      try {
         if (!mongoose.Types.ObjectId.isValid(pid)) {
            return { status: "error", error: "Invalid product ID format" }
         }

         const product = await productsModel.findById(pid)
         if (!product) {
            return { status: "error", error: `Product with id ${pid} not found` }
         }

         return { status: "success", payload: product }
      } catch (error) {
         return { status: "error", error: "Internal server error" }
      }
   }

   // agrega un objeto producto nuevo a la colección
   async addProduct(data) {
      try {
         const arr = Array.isArray(data) ? data : [data]

         for (const product of arr) {
            const { title, description, code, price, status, stock, category, thumbnails } = product
            if (!title || !description || !code || !price || !status || !stock || !category || !thumbnails) {
               return { status: "error", error: "Missing values" }
            }
         }

         const result = await productsModel.insertMany(arr)
         const products = await this.getProducts()
         this.io.emit('lista_productos', products.payload)

         return {
            status: "success",
            inserted: result.length,
            payload: result
         }

      } catch (error) {
         return { status: "error", error: "Internal server error" }
      }
   }

   // modifica un producto 
   async updateProduct(pid, productReplace) {
      try {
         delete productReplace._id

         const { title, description, code, price, status, stock, category, thumbnails } = productReplace

         if (!title || !description || !code || !price || !status || !stock || !category || !thumbnails) {
            return { status: "error", error: "Missing values" }
         }

         const result = await productsModel.updateOne(
            { _id: pid },
            { $set: productReplace }
         )

         return { status: "success", payload: result }

      } catch (error) {
         return { status: "error", error: "Internal server error" }
      }
   }

   // elimina un producto
   async deleteProduct(pid) {
      try {
         if (!mongoose.Types.ObjectId.isValid(pid)) {
            return { status: "error", error: "Invalid product ID format" }
         }

         const product = await productsModel.findById(pid)
         if (!product) {
            return { status: "error", error: `Product with id ${pid} Not Found` }
         }

         await productsModel.deleteOne({ _id: pid })

         return { status: "success", payload: product }

      } catch (error) {
         return { status: "error", error: "Internal server error" }
      }
   }
}
