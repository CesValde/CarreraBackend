import dotenv from "dotenv"
dotenv.config()

export default {
   port: process.env.PORT,
   atlasUrl: process.env.ATLAS_URL,
   jwtSecret: process.env.JWT_SECRET,
   cookieSecret: process.env.COOKIE_SECRET
}
