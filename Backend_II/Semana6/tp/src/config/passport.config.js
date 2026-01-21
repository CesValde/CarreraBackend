import passport from "passport"
import jwt from "passport-jwt"
import { userModel } from "../models/user.model.js"

const JWTStrategy = jwt.Strategy
const ExtractJWT = jwt.ExtractJwt

// extractor de JWT desde cookies firmadas
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
            // Define de dónde se obtiene el JWT. --> cookie en este caso
            jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
            secretOrKey: process.env.JWT_SECRET
         },

         // se ejecuta solo si el JWT es válido.
         // jwt_payload --> contenido decodificado del token
         // done(error, user, info)
         async (jwt_payload, done) => {
            try {
               const user = await userModel.findById(jwt_payload.id).lean()
               if (!user) return done(null, false)

               return done(null, user)
            } catch (error) {
               return done(error, false)
            }
         }
      )
   )
}
