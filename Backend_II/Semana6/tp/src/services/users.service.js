import usersDAO from "../repositories/user.repository.js"
import bcrypt from "bcrypt"
import AppError from "../error/error.js"

class UserServices {
   async getAll() {
      try {
         return await usersDAO.getAll()
      } catch (error) {
         throw new AppError("Database error", 500)
      }
   }

   async getByEmail(email) {
      try {
         const user = await usersDAO.getByEmail(email) //.select("+password")

         if (!user) {
            throw new AppError("User not found", 404)
         }

         return user
      } catch (error) {
         if (error instanceof AppError) throw error
         throw new AppError("Database error", 500)
      }
   }

   async getById(id) {
      try {
         const user = await usersDAO.getById(id)

         if (!user) {
            throw new AppError("User not found", 404)
         }

         return user
      } catch (error) {
         if (error instanceof AppError) throw error
         throw new AppError("Database error", 500)
      }
   }

   async create(arr) {
      try {
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
               throw new AppError("Missing values", 400)
            }

            const hash = await bcrypt.hash(password, 10)
            user.password = hash
         }

         const result = await usersDAO.create(arr)
         return result
      } catch (error) {
         if (error instanceof AppError) throw error
         throw new AppError("Database error", 500)
      }
   }

   async update(id, first_name, last_name, email, password, age, role) {
      try {
         if (
            !first_name ||
            !last_name ||
            !email ||
            !password ||
            !age ||
            !role
         ) {
            throw new AppError("Missing values", 400)
         }

         const hash = await bcrypt.hash(password, 10)

         const updatedUser = await usersDAO.update(
            id,
            first_name,
            last_name,
            email,
            hash,
            age,
            role
         )

         if (!updatedUser) {
            throw new AppError("User not found", 404)
         }

         return updatedUser
      } catch (error) {
         if (error instanceof AppError) throw error
         throw new AppError("Database error", 500)
      }
   }

   async delete(id) {
      try {
         const user = await usersDAO.delete(id)

         if (!user) {
            throw new AppError("User not found", 404)
         }

         return user
      } catch (error) {
         if (error instanceof AppError) throw error
         throw new AppError("Database error", 500)
      }
   }

   // esto iria en un user.services.
   async login(email, password) {
      try {
         if (!email || !password) {
            throw new AppError("Missing values", 400)
         }

         const user = await this.getByEmail(email)

         const isValidPassword = await bcrypt.compare(password, user.password)

         if (!isValidPassword) {
            throw new AppError("incorrect credentials", 400)
         }

         return user
      } catch (error) {
         if (error instanceof AppError) throw error
         throw new AppError("Database error", 500)
      }
   }
}

export default new UserServices()
