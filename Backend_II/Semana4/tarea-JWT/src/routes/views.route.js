import { Router } from "express"
import { passportCall, authorization } from "../middleware/auth.middleware.js"

const router = Router()

// Login
router.get("/login", async (req, res) => {
   res.render("login")
})

router.get("/current", passportCall('jwt'), authorization('user'), async (req, res) => {
   res.render("current")
})

export default router
