import passport from "passport"
import { userModel } from "../models/user.model.js"
import jwt from "passport-jwt"

const JWTStrategy = jwt.Strategy
const ExtractJWT = jwt.ExtractJwt

const cookieExtractor = (req) => {
   let token = null
   if (req && req.headers) {
      token = req.headers.authorization.split("")[1]
   }
   return token
}

/**
 * Estrategia JWT de Passport.
 *
 * - Extrae el token JWT desde una cookie firmada (`currentUser`).
 * - Verifica la firma del token usando `JWT_SECRET`.
 * - Si el token es válido, inyecta el payload en `req.user`.
 * - No utiliza sesiones (autenticación stateless).
 */
export const initializePassport = () => {
   passport.use(
      "jwt",
      new JWTStrategy(
         {
            jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
            secretOrKey: process.env.JWT_SECRET
         },
         async (jwt_payload, done) => {
            try {
               return done(null, jwt_payload)
            } catch (error) {
               return done(error)
            }
         }
      )
   )

   /* No usar estas de abajo pq se usan con session -> no usar con JWT */
   passport.serializeUser((user, done) => {
      done(null, user._id)
   })

   passport.deserializeUser(async (id, done) => {
      let user = await userModel.findById(id)
      done(null, user)
   })
}
