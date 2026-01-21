import { Router } from "express"
import { passportCall } from "../middleware/auth.middleware.js"
import * as sessionController from "../controllers/session.controller.js"

const router = Router()

router.get(
   "/redirect/login",
   passportCall("current"),
   sessionController.loginSucessfull
)
router.get("/current", passportCall("current"), sessionController.currentUser)

export default router
