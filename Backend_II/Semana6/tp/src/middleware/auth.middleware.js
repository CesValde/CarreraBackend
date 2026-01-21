import passport from "passport"
import jwt from "jsonwebtoken"

/**
 * Ejecuta una estrategia de Passport (JWT)
 */
export const passportCall = (strategy) => {
   return (req, res, next) => {
      passport.authenticate(strategy, { session: false }, (err, user, info) => {
         if (err) {
            return res.status(500).json({
               status: "error",
               error: "Authentication error"
            })
         }

         if (!user) {
            return res.status(401).json({
               status: "error",
               error: "Unauthorized",
               message: info?.message || "Invalid or missing token"
            })
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
      // const user = req.user

      if (!req.user) {
         return res.redirect("/error")
      }

      if (req.user.role !== role) {
         return res.status(403).json({ error: "Unauthorized" })
      }
      next()
   }
}

/**
 * Redirige el usuario al hacer login
 */
export const redirectAuth = (req, res, next) => {
   const token = req.signedCookies?.currentUser

   if (!token) return next()

   try {
      jwt.verify(token, process.env.JWT_SECRET)
      return res.redirect("/api/session/redirect/login")
   } catch {
      return next()
   }
}

/**
 * Controla que un usuario logueado no entre al login
 */
export const preventAuth = (req, res, next) => {
   const token = req.signedCookies?.currentUser

   if (!token) return next()

   try {
      jwt.verify(token, process.env.JWT_SECRET)
      return res.redirect("/api/session/current")
   } catch {
      return next()
   }
}
