import { Router } from "express"
import {
   passportCall,
   preventAuth,
   redirectAuth
} from "../middleware/auth.middleware.js"
import * as authUserController from "../controllers/authUser.controller.js"

const router = Router()

router.post("/login", preventAuth, redirectAuth, authUserController.submitLogin)

router.get("/login", preventAuth, authUserController.login)

router.get("/logout", passportCall("jwt"), authUserController.logout)

export default router
