import passport from "passport"

/**
 * Ejecuta una estrategia de Passport (JWT en tu caso)
 */
export const passportCall = (strategy) => {
   return passport.authenticate(strategy, { session: false })
}

/**
 * Controla autorización por rol
 */
export const authorization = (role) => {
   return (req, res, next) => {
      if (!req.user) {
         return res.status(401).json({ error: "No autenticado" })
      }

      if (req.user.role !== role) {
         return res.status(403).json({ error: "No autorizado" })
      }

      next()
   }
}
