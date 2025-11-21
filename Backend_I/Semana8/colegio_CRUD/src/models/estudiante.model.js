import mongoose from "mongoose"

/* Coleccion en la base de datos */
const studentCollection = 'estudiantes'

const studentSchema = new mongoose.Schema({
   /* Estructura del objeto */
   name: { type: String, required: true },
   last_name: { type: String, required: true },
   age: { type: Number, required: true },
   dni: { type: String, unique: true, required: true },
   curso: { type: String, required: true },
   nota: { type: Number, required: true }
})

export const studentModel = mongoose.model(studentCollection, studentSchema)