import mongoose from "mongoose"

/* Coleccion en la base de datos */
const usersCollection = "users"

const userSchema = new mongoose.Schema(
   {
      /* Estructura del objeto */
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true, select: false },
      age: { type: Number, required: true },
      role: { type: String, enum: ["user", "admin"], default: "user" },

      cart: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "carts"
      }
   },
   { timestamps: true }
)

export const userModel = mongoose.model(usersCollection, userSchema)
