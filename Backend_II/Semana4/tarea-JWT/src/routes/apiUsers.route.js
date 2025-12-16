import { Router } from "express"
import { userModel } from "../models/user.model.js"

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = Router()

router.post("/login", async (req, res) => {
   const { email, password } = req.body

   if (!email || !password) {
      return res.status(400).json({
         status: "error",
         message: "Email y password son obligatorios"
      })
   }

   const user = await userModel.findOne({ email })

   if (!user)
      return res.status(404).json({
         status: "error",
         message: "No existe un usuario con ese email"
      })

   const isValidPassword = await bcrypt.compare(password, user.password)

   if (!isValidPassword) {
      return res.status(401).json({
         status: "error",
         message: "Credenciales inválidas"
      })
   }

   const token = jwt.sign(
      {
         id: user._id,
         email: user.email,
         role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
   )
   res.cookie("currentUser", token, {
      httpOnly: true,
      signed: true,
      maxAge: 24 * 60 * 60 * 1000
   })
   res.send({ message: `Bienvenido ${user.first_name}`, token })
})

export default router
