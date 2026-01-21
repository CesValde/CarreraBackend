import userServices from "../services/users.service.js"

export const getAllUsers = async (req, res) => {
   try {
      const users = await userServices.getAll()
      return res.status(200).json(users)
   } catch (error) {
      return res.status(error.statusCode || 500).json({
         error: error.statusCode ? error.message : "Internal server error"
      })
   }
}

export const getUserById = async (req, res) => {
   const { uid } = req.params

   try {
      const user = await userServices.getById(uid)
      return res.status(200).json(user)
   } catch (error) {
      return res.status(error.statusCode || 500).json({
         error: error.statusCode ? error.message : "Internal server error"
      })
   }
}

export const saveUser = async (req, res) => {
   const data = req.body
   const arr = Array.isArray(data) ? data : [data]

   try {
      const user = await userServices.create(arr)
      return res.status(201).json({
         message: "User created successfully",
         user
      })
   } catch (error) {
      return res.status(error.statusCode || 500).json({
         error: error.statusCode ? error.message : "Internal server error"
      })
   }
}

export const updateUser = async (req, res) => {
   const { uid } = req.params
   const { first_name, last_name, email, password, age, role } = req.body

   try {
      const user = await userServices.update(
         uid,
         first_name,
         last_name,
         email,
         password,
         age,
         role
      )
      return res.status(200).json({
         message: "User update successfully",
         user
      })
   } catch (error) {
      return res.status(error.statusCode || 500).json({
         error: error.statusCode ? error.message : "Internal server error"
      })
   }
}

export const deleteUser = async (req, res) => {
   const { uid } = req.params

   try {
      const user = await userServices.delete(uid)
      return res.status(204).json({
         message: "User delete successfully",
         user
      })
   } catch (error) {
      return res.status(error.statusCode || 500).json({
         error: error.statusCode ? error.message : "Internal server error"
      })
   }
}
