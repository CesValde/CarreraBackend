import passport from "passport"
import jwt from "passport-jwt"
import { userModel } from "../models/user.model.js"

const JWTStrategy = jwt.Strategy
const ExtractJWT = jwt.ExtractJwt

const cookieExtractor = (req) => {
   if (!req || !req.signedCookies) return null
   return req.signedCookies.currentUser || null
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
   // estrategia para el uso de jwt
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

   // Estrategia CURRENT (usuario actual)
   passport.use(
      "current",
      new JWTStrategy(
         {
            jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
            secretOrKey: process.env.JWT_SECRET
         },
         async (jwt_payload, done) => {
            try {
               const user = await userModel.findById(jwt_payload.id).lean()
               if (!user) return done(null, false)

               return done(null, user)
            } catch (error) {
               console
               return done(error, false)
            }
         }
      )
   )
}
