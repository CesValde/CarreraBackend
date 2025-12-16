import { Router } from "express"
import { userModel } from "../models/user.model.js"
import { preventAuth } from "../middleware/auth.middleware.js"

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = Router()

router.post("/login", preventAuth, async (req, res) => {
   const { email, password } = req.body

   if (!email || !password) {
      // redirigir a una pagina de error o la misma pag
      // res.redirect("/login?error=1")
      return res.redirect("/views/login?error=1")
   }

   const user = await userModel.findOne({ email }).select("+password")
   /*  console.log(email)
   console.log(password)
   console.log(user) */

   if (!user)
      return res.status(404).json({
         status: "error",
         message: "No existe un usuario con ese email"
      })

   const isValidPassword = await bcrypt.compare(password, user.password)

   if (!isValidPassword) {
      // redirigir a una pagina de error o la misma pag
      // res.redirect("/login?error=1")
      return res.redirect("/views/login?error=1")
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
   return res.redirect("/views/current")
})

router.get("/logout", (req, res) => {
   res.clearCookie("currentUser")
   return res.redirect("/views/login")
})

export default router
