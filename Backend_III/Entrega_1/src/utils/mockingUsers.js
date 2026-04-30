import bcrypt from "bcrypt"
import { faker } from "@faker-js/faker"

export const generateMockUsers = async (quantity) => {
   const users = []
   const hashedPassword = await bcrypt.hash("coder123", 10)

   for (let i = 0; i < quantity; i++) {
      users.push({
         first_name: faker.person.firstName(),
         last_name: faker.person.lastName(),
         email: faker.internet.email(),
         password: hashedPassword,
         role: faker.helpers.arrayElement(["user", "admin"]),
         pets: [],
         createdAt: new Date(),
         updatedAt: new Date()
      })
   }

   return users
}
