import { Router } from "express"
import {
   passportCall,
   authorization,
   preventAuth
} from "../middleware/auth.middleware.js"

const router = Router()

// Login
router.get("/login", preventAuth, async (req, res) => {
   const { error } = req.query

   res.render("login", {
      error: error === "1"
   })
})

router.get(
   "/current",
   passportCall("jwt"),
   authorization("user"),
   async (req, res) => {
      res.render("current", {
         user: req.user
      })
   }
)

export default router
