import mongoose, { Schema } from "mongoose"

/* Coleccion en la base de datos */
const cartsCollection = 'carts'

const cartSchema = new mongoose.Schema({
   /* Estructura del objeto */
   products: [{
      // ref --> tiene que ser el mismo nombre de 'productsCollection' en 'products.Model.js'
      product: { type: Schema.Types.ObjectId, ref: "products", required: true },
      quantity: { type: Number, required: true, default: 1 }
   }]
})

export const cartsModel = mongoose.model(cartsCollection, cartSchema)