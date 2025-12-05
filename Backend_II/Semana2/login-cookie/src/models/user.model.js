import mongoose from "mongoose"

/* Coleccion en la base de datos */
const usersCollection = 'users'

const userSchema = new mongoose.Schema({
   /* Estructura del objeto */
   first_name: {
      type: String,
      required: true
   },
   last_name: {
      type: String,
      required: true
   },
   age: {
      type: Number,
      required: false
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true,
   }
})

export const userModel = mongoose.model(usersCollection, userSchema)