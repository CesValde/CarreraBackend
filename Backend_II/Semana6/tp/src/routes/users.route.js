import { Router } from "express"
import { authorization, passportCall } from "../middleware/auth.middleware.js"
import * as userController from "../controllers/users.controller.js"

const router = Router()

router.get(
   "/",
   passportCall("jwt"),
   authorization("admin"),
   userController.getAllUsers
)

router.get(
   "/:uid",
   passportCall("jwt"),
   authorization("admin"),
   userController.getUserById
)

router.post(
   "/",
   passportCall("jwt"),
   authorization("admin"),
   userController.saveUser
)

router.put(
   "/:uid",
   passportCall("jwt"),
   authorization("admin"),
   userController.updateUser
)

router.delete(
   "/:uid",
   passportCall("jwt"),
   authorization("admin"),
   userController.deleteUser
)

export default router
