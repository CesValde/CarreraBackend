import { Router } from 'express'
import { userModel } from '../models/user.model.js'

export const router = Router()

/* Funcion siempre asincrona para trabajar con mongoose */
router.get('/', async(req, res) => {
   try {
      let users = await userModel.find()
      res.send({ result: "Success", payload: users })
   }
   catch(error) {
      console.log(`Cannot get the user ${error}`)
   }
})

/* Crea un usuario en la base de datos */
router.post('/create', async(req, res) => {
   let { first_name, last_name, email } = req.body

   if(!first_name || !last_name || !email) return res.send({ status: 400, error: "Valores faltantes"})

   let result = await userModel.create({
      first_name,
      last_name,
      email
   })

   res.send({ status: 201, payload: result })
})

/* Modifica un usuario en la base de datos */
router.put('/:uid', async (req, res) => {
   const { uid } = req.params
   let userToReplace = { ...req.body }    // buena pracatica usar una copia independiente

   // sirve como validacion si te mandan el id desde el body (no se puede modificar el id)
   // en este caso no hace falta porque desde postman no se manda el id
   delete userToReplace._id

   if(!userToReplace.first_name || !userToReplace.last_name || !userToReplace.email) {
      return res.status(400).send({ error: "Valores faltantes" })
   }

   /* 
      updateOne usa 2 parametros --> updateOne(filtro, datos_a_actualizar) 
      filtro en este caso seria el id, y los datos el body
   */
   const result = await userModel.updateOne(
      { _id: uid },          // qué documento buscás
      { $set: userToReplace} // qué datos actualizás
   )

   res.send({ status: "Actualizado kpo", payload: result })
})

/* Elimina un usuario en la base de datos */
router.delete('/:uid', async(req, res) => {
   let { uid } = req.params

   let result = await userModel.deleteOne({ _id: uid })
   res.send({ status: "Borrado perrito", payload: result})
})