import { Router } from 'express'
import { userModel } from '../models/user.model.js'

export const router = Router()

/* Funcion siempre asincrona para trabajar con mongoose */
router.get('/', async(req, res) => {
   try {
      const users = await userModel.find()
      res.send({ result: "Success", payload: users })
   }
   catch(error) {
      console.log(`Cannot get the user ${error}`)
   }
})

/* Crea un usuario en la base de datos */
router.post('/create', async(req, res) => {
   try {
      const { first_name, last_name, email } = req.body

      if(!first_name || !last_name || !email) {
         return res.status(400).send({ error: "Valores faltantes" })
      }

      const result = await userModel.create({ first_name, last_name, email })
      res.status(201).send({ status: "success", payload: result })

   } catch(error) {
      console.error(error)
      res.status(500).send({ error: "Error interno del servidor" })
   }
})

/* Modifica un usuario en la base de datos */
router.put('/:uid', async (req, res) => {
   try {
      const { uid } = req.params
      const userToReplace = { ...req.body }
      delete userToReplace._id

      if(!userToReplace.first_name || !userToReplace.last_name || !userToReplace.email) {
         return res.status(400).send({ error: "Valores faltantes" })
      }

      const result = await userModel.updateOne(
         { _id: uid },
         { $set: userToReplace }
      )

      res.send({ status: "Actualizado", payload: result })

   } catch(error) {
      console.error(error)
      res.status(500).send({ error: "Error interno del servidor" })
   }
})


/* Elimina un usuario en la base de datos */
router.delete('/:uid', async(req, res) => {
   try {
      const { uid } = req.params
      const result = await userModel.deleteOne({ _id: uid })
      res.send({ status: "Borrado", payload: result })

   } catch(error) {
      console.error(error)
      res.status(500).send({ error: "Error interno del servidor" })
   }
})