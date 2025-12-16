import passport from "passport"

/**
 * Ejecuta una estrategia de Passport (JWT en tu caso)
 */
export const passportCall = (strategy) => {
   return (req, res, next) => {
      passport.authenticate(strategy, { session: false }, (err, user) => {
         if (err || !user) {
            return res.redirect("/views/login")
         }

         req.user = user
         next()
      })(req, res, next)
   }
}

/**
 * Controla autorización por rol
 */
export const authorization = (role) => {
   return (req, res, next) => {
      if (!req.user) {
         return res.redirect("/login")
      }

      if (req.user.role !== role) {
         return res.status(403).json({ error: "No autorizado" })
      }
      next()
   }
}

/**
 * Controla que un usuario logueado no entre al login
 */
export const preventAuth = (req, res, next) => {
   if (req.signedCookies?.currentUser) {
      return res.redirect("/views/current")
   }
   next()
}
