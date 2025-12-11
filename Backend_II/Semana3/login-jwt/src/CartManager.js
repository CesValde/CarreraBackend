import mongoose from "mongoose"
import { cartsModel } from "./models/carts.model.js"
import { productsModel } from "./models/products.model.js"

export class CartManager {
   // Obtiene todos los carritos
   async getCarts() {
      try {
         const result = await cartsModel.find()
         return { status: "success", payload: result }
      } catch (error) {
         return { status: "error", error: "Internal server error" }
      }
   }

   // Retorna los productos de un carrito por ID
   async getProductsCartById(cid) {
      try {
         if (!mongoose.Types.ObjectId.isValid(cid)) {
            return { status: "error", error: "Invalid cart ID format" }
         }

         const cart = await cartsModel.findById(cid).populate("products.product").lean()
         if (!cart) {
            return { status: "error", error: `Cart with id: ${cid} Not Found` }
         }

         return { status: "success", payload: cart }
      } catch (error) {
         return { status: "error", error: "Internal server error" }
      }
   }

   // Crea un nuevo carrito
   async createCart(cartData) {
      try {
         // Si no mandan nada → creo un carrito vacío
         if (!cartData || !Array.isArray(cartData.products)) {
            cartData = { products: [] }
         }

         const result = await cartsModel.create(cartData)
         return { status: "success", payload: result }
      } catch (error) {
         return { status: "error", error: "Internal server error" }
      }
   }

   // Agrega un producto a un carrito
   async addProductCart(cid, pid) {
      try {
         if (!mongoose.Types.ObjectId.isValid(cid) || !mongoose.Types.ObjectId.isValid(pid)) {
            return { status: "error", error: "Invalid product/cart ID format" }
         }

         const cart = await cartsModel.findById(cid)
         if (!cart) {
            return { status: "error", error: `Cart with id: ${cid} Not Found` }
         }

         const product = await productsModel.findById(pid)
         if (!product) {
            return { status: "error", error: `Product with id: ${pid} Not Found` }
         }

         const index = cart.products.findIndex(p => String(p.product) === pid)
         if (index !== -1) {
            cart.products[index].quantity++
         } else {
            cart.products.push({ product: pid, quantity: 1 })
         }

         const updatedCart = await cart.save()
         return { status: "success", payload: updatedCart }
      } catch (error) {
         return { status: "error", error: "Internal server error" }
      }
   }

   // Elimina un producto de un carrito
   async deleteProductCart(cid, pid) {
      try {
         if (!mongoose.Types.ObjectId.isValid(cid) || !mongoose.Types.ObjectId.isValid(pid)) {
            return { status: "error", error: "Invalid product/cart ID format" }
         }

         const cart = await cartsModel.findById(cid)
         if (!cart) {
            return { status: "error", error: `Cart with id: ${cid} Not Found` }
         }

         const index = cart.products.findIndex(p => String(p.product) === pid)
         if (index === -1) {
            return { status: "error", error: `Product ${pid} not found in cart` }
         }

         cart.products.splice(index, 1)
         await cart.save()

         return { status: "success", payload: cart }
      } catch (error) {
         return { status: "error", error: "Internal server error" }
      }
   }

   // Actualiza todos los productos de un carrito
   async updateProductsCart(cid, newProducts) {
      try {
         if (!mongoose.Types.ObjectId.isValid(cid)) {
            return { status: "error", error: "Invalid cart ID format" }
         }

         const cart = await cartsModel.findById(cid)
         if (!cart) {
            return { status: "error", error: `Cart with id: ${cid} Not Found` }
         }

         if (!Array.isArray(newProducts)) {
            return { status: "error", error: "Body must be an array of products" }
         }

         cart.products = newProducts
         await cart.save()

         return { status: "success", payload: cart }
      } catch (error) {
         return { status: "error", error: "Internal server error" }
      }
   }

   // Actualiza la cantidad de un producto específico
   async updateQuantity(cid, pid, quantity) {
      try {
         if (!mongoose.Types.ObjectId.isValid(cid) || !mongoose.Types.ObjectId.isValid(pid)) {
            return { status: "error", error: "Invalid product/cart ID format" }
         }

         if (typeof quantity !== "number" || quantity < 1) {
            return { status: "error", error: "Quantity must be a positive number" }
         }

         const cart = await cartsModel.findById(cid)
         if (!cart) {
            return { status: "error", error: `Cart with id: ${cid} Not Found` }
         }

         const index = cart.products.findIndex(p => String(p.product) === pid)
         if (index === -1) {
            return { status: "error", error: `Product ${pid} not found in cart` }
         }

         cart.products[index].quantity = quantity
         await cart.save()
         return { status: "success", payload: cart }
      } catch (error) {
         return { status: "error", error: "Internal server error" }
      }
   }

   // Elimina todos los productos de un carrito
   async deleteAllProductsCart(cid) {
      try {
         if (!mongoose.Types.ObjectId.isValid(cid)) {
            return { status: "error", error: "Invalid cart ID format" }
         }

         const cart = await cartsModel.findById(cid)
         if (!cart) {
            return { status: "error", error: `Cart with id: ${cid} Not Found` }
         }

         cart.products = []
         await cart.save()

         return { status: "success", payload: cart }
      } catch (error) {
         return { status: "error", error: "Internal server error" }
      }
   }
}
