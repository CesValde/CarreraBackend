import { Router } from "express"
import { generateMockUsers } from "../utils/mockingUsers.js"
import { generateMockPets } from "../utils/mockingPets.js"
import UserModel from "../models/user.model.js"
import PetModel from "../models/pet.model.js"

const router = Router()

/**
 * GET /api/mocks/mockingpets
 */
router.get("/mocking-pets", (req, res) => {
   const pets = generateMockPets(100)
   res.json({ status: "success", payload: pets })
})

/**
 * GET /api/mocks/mockingusers
 * Genera 50 usuarios mock (sin insertar en DB)
 */
router.get("/mocking-users", async (req, res) => {
   const users = await generateMockUsers(50)
   res.json({ status: "success", payload: users })
})

/**
 * POST /api/mocks/generateData
 * Inserta usuarios y mascotas en la base de datos
 */
router.post("/generateData", async (req, res) => {
   try {
      // llegan numeros de users/pets
      const { users, pets } = req.body

      if (!users || !pets) {
         return res.status(400).json({
            status: "error",
            error: "Debe enviar los parámetros users y pets"
         })
      }

      const mockUsers = await generateMockUsers(users)
      const mockPets = generateMockPets(pets)

      await UserModel.insertMany(mockUsers)
      await PetModel.insertMany(mockPets)

      res.json({
         status: "success",
         message: "Datos generados e insertados correctamente",
         usersInserted: users,
         petsInserted: pets
      })
   } catch (error) {
      res.status(500).json({
         status: "error",
         error: error.message
      })
   }
})

export default router
