import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

/* Coleccion en la base de datos */
const productsCollection = 'products'

const productSchema = new mongoose.Schema({
   /* Estructura del objeto */
   title: { type: String, required: true},
   description: { type: String, required: true},
   code: { type: String, required: true},
   price: { type: Number, required: true},
   status: { type: Boolean, required: true},
   stock: { type: Number, required: true},
   category: { type: String, required: true},
   thumbnails: { type: String, required: true},
})

productSchema.plugin(mongoosePaginate)
export const productsModel = mongoose.model(productsCollection, productSchema)