import { Router } from 'express'
import { studentModel } from '../models/estudiante.model.js'

export const router = Router()

/* Funcion siempre asincrona para trabajar con mongoose */
router.get('/', async(req, res) => {
   try {
      const students = await studentModel.find()
      res.status(200).send({ result: "Success", payload: students })
   }
   catch(error) {
      console.log(`Cannot get the user ${error}`)
   }
})

/* Crea un estudiante en la base de datos */
router.post('/create', async (req, res) => {
   try {
      let data = req.body

      // Si viene un solo objeto, lo convertimos en array para procesarlo igual
      if(!Array.isArray(data)) {
         data = [data]
      }

      // Validación simple
      for(const student of data) {
         const { name, last_name, age, dni, curso, nota } = student
         if(!name || !last_name || !age || !dni || !curso || !nota) {
            return res.status(400).send({ error: "Valores faltantes en algún estudiante" })
         }
      }

      // Inserta varios de una vez
      const result = await studentModel.insertMany(data)

      res.status(201).send({
         status: "Success",
         inserted: result.length,
         payload: result
      })
   } catch(error) {
      console.error(error)
      res.status(500).send({ error: "Error interno del servidor" })
   }
})

/* Modifica un estudiante en la base de datos */
router.put('/:uid', async (req, res) => {
   try {
      const { uid } = req.params
      const studentToReplace = { ...req.body }
      delete studentToReplace._id

      if(   !studentToReplace.name 
            || !studentToReplace.last_name 
            || !studentToReplace.age
            || !studentToReplace.dni
            || !studentToReplace.curso
            || !studentToReplace.nota
      ) {
         return res.status(400).send({ error: "Valores faltantes" })
      }

      const result = await studentModel.updateOne(
         { _id: uid },
         { $set: studentToReplace }
      )

      res.status(200).send({ status: "Actualizado", payload: result })

   } catch(error) {
      console.error(error)
      res.status(500).send({ error: "Error interno del servidor" })
   }
})

/* Elimina un estudiante en la base de datos */
router.delete('/:uid', async(req, res) => {
   try {
      const { uid } = req.params
      const result = await studentModel.deleteOne({ _id: uid })
      res.status(200).send({ status: "Borrado", payload: result })

   } catch(error) {
      console.error(error)
      res.status(500).send({ error: "Error interno del servidor" })
   }
})