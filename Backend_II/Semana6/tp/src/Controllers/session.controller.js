export const loginSucessfull = async (req, res) => {
   try {
      const user = req.user

      return res.status(200).json({
         message: `Session started, welcome, ${user.first_name}`,
         user: req.user
      })
   } catch (error) {
      return res.status(error.statusCode || 500).json({
         error: error.statusCode ? error.message : "Internal server error"
      })
   }
}

export const currentUser = async (req, res) => {
   try {
      return res.status(200).json({
         message: `You are alredy login`
      })
   } catch (error) {
      return res.status(error.statusCode || 500).json({
         error: error.statusCode ? error.message : "Internal server error"
      })
   }
}
