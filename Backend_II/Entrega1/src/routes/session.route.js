import { Router } from "express"
import { passportCall } from "../middleware/auth.middleware.js"

const router = Router()

router.get("/current", passportCall("current"), async (req, res) => {
   const user = req.user

   return res.status(200).json({
      message: `Session started, welcome, ${user.first_name}`,
      user: req.user
   })
})

export default router
