import { userModel } from "../models/user.model.js"

class UsersDAO {
   async getAll() {
      return await userModel.find()
   }

   async getByEmail(email) {
      return await userModel.findOne({ email }).select("+password")
   }

   async getById(id) {
      return await userModel.findById(id)
   }

   async create(users) {
      return await userModel.insertMany(users)
   }

   async update(id, first_name, last_name, email, password, age, role) {
      return await userModel.findByIdAndUpdate(
         id,
         {
            first_name,
            last_name,
            email,
            password,
            age,
            role
         },
         {
            new: true,
            runValidators: true
         }
      )
   }

   async delete(id) {
      return await userModel.findByIdAndDelete(id)
   }
}

export default new UsersDAO()
