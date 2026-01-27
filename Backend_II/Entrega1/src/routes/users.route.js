import { Router } from "express"
import { userModel } from "../models/user.model.js"
import { authorization, passportCall } from "../middleware/auth.middleware.js"

import bcrypt from "bcrypt"

const router = Router()

router.get(
   "/",
   passportCall("jwt"),
   authorization("admin"),
   async (req, res) => {
      const users = await userModel.find() //.select("+password")
      res.json({ users })
   }
)

router.get(
   "/:uid",
   passportCall("jwt"),
   authorization("admin"),
   async (req, res) => {
      try {
         const { uid } = req.params
         const user = await userModel.findById(uid) //.select("+password")

         if (!user)
            return res
               .status(404)
               .json({ status: "error", error: "User not found" })

         res.status(200).json({
            status: "success",
            payload: user
         })
      } catch (error) {
         console.error(error)
         res.status(500).json({ error: "Internal server error" })
      }
   }
)

router.post(
   "/",
   passportCall("jwt"),
   authorization("admin"),
   async (req, res) => {
      try {
         const data = req.body
         const arr = Array.isArray(data) ? data : [data]

         for (const user of arr) {
            const { first_name, last_name, email, password, age, role } = user

            if (
               !first_name ||
               !last_name ||
               !email ||
               !password ||
               !age ||
               !role
            ) {
               return res.status(400).json({ error: "Missing values" })
            }

            const hash = await bcrypt.hash(password, 10)
            user.password = hash
         }

         const result = await userModel.insertMany(arr)

         res.status(201).json({
            payload: result.map((u) => ({
               first_name: u.first_name,
               last_name: u.last_name,
               email: u.email,
               age: u.age,
               role: u.role
            })),
            inserted: result.length
         })
      } catch (error) {
         console.error(error)
         res.status(500).json({ error: "Internal server error" })
      }
   }
)

router.put(
   "/:uid",
   passportCall("jwt"),
   authorization("admin"),
   async (req, res) => {
      try {
         const { uid } = req.params
         const { first_name, last_name, email, password, age, role } = req.body

         if (
            !first_name ||
            !last_name ||
            !email ||
            !password ||
            !age ||
            !role
         ) {
            return res.status(400).json({ error: "Missing values" })
         }

         const hash = await bcrypt.hash(password, 10)

         const updatedUser = await userModel.findByIdAndUpdate(
            uid,
            {
               first_name,
               last_name,
               email,
               password: hash,
               age,
               role
            },
            {
               new: true,
               runValidators: true
            }
         )

         if (!updatedUser) {
            return res.status(404).json({ error: "User not found" })
         }

         res.status(200).json({
            status: "success",
            user: updatedUser
         })
      } catch (error) {
         console.error(error)
         res.status(500).json({ error: "Internal server error" })
      }
   }
)

router.delete(
   "/:uid",
   passportCall("jwt"),
   authorization("admin"),
   async (req, res) => {
      try {
         const { uid } = req.params
         const user = await userModel.findById(uid)

         if (!user)
            return res
               .status(404)
               .json({ status: "error", error: "Usuario no encontrado" })

         await userModel.deleteOne({ _id: pid })

         res.status(200).json({
            status: "success",
            payload: result
         })
      } catch (error) {
         console.error(error)
         res.status(500).json({ error: "Internal server error" })
      }
   }
)

export default router
