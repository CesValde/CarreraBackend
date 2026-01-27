import { Router } from "express"
import { userModel } from "../models/user.model.js"
import { passportCall, preventAuth } from "../middleware/auth.middleware.js"

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = Router()

router.post("/login", preventAuth, async (req, res) => {
   const { email, password } = req.body

   if (!email || !password) {
      return res.status(400).json({
         status: "error",
         message: "missing values"
      })
   }

   const user = await userModel.findOne({ email }).select("+password")

   if (!user)
      return res.status(404).json({
         status: "error",
         message: "there is no user with that email address."
      })

   const isValidPassword = await bcrypt.compare(password, user.password)

   if (!isValidPassword) {
      return res.status(404).json({
         status: "error",
         message: "incorrect credentials"
      })
   }

   const token = jwt.sign(
      {
         id: user._id,
         first_name: user.first_name,
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

   return res.redirect("/api/session/current")
})

router.get("/login", preventAuth, async (req, res) => {
   return res.status(200).json({
      status: "success",
      message: "this is the login"
   })
})

router.get("/logout", passportCall("jwt"), async (req, res) => {
   res.clearCookie("currentUser")

   return res.status(200).json({
      status: "success",
      message: "logout succesfull"
   })
})

export default router
