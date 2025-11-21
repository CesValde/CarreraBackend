import mongoose from "mongoose"

/* Coleccion en la base de datos */
const userCollection = 'usuarios'

const userSchema = new mongoose.Schema({
   /* Estructura del objeto */
   first_name: { type: String, required: true },
   last_name: { type: String, required: true },
   email: { type: String, unique: true }
})

export const userModel = mongoose.model(userCollection, userSchema)