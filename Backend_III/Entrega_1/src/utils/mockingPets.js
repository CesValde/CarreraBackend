import { faker } from "@faker-js/faker"

export const generateMockPets = (quantity) => {
   const pets = []

   for (let i = 0; i < quantity; i++) {
      pets.push({
         name: faker.animal.petName(),
         type: faker.helpers.arrayElement(["dog", "cat", "bird"]),
         age: faker.number.int({ min: 1, max: 15 }),
         createdAt: new Date(),
         updatedAt: new Date()
      })
   }

   return pets
}
