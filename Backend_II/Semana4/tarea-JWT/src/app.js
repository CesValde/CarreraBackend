import dotenv from "dotenv"
dotenv.config()

import express from "express"
import mongoose from "mongoose"
import handlebars from "express-handlebars"
import path from "path"
import { fileURLToPath } from "url"
import cookieParser from "cookie-parser"

import apiUsers from "./routes/apiUsers.route.js"
import users from "./routes/users.route.js"
import views from "./routes/views.route.js"

import { initializePassport } from "./config/passport.config.js"
import passport from "passport"

// filename toma el directorio del archivo ej: C:\Entrega2\src\app.js
// dirname toma la carpeta del directorio del archivo ej: C:\proyectos\miapp\src
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3000

// Handlebars
app.engine(
   "handlebars",
   handlebars.engine({
      defaultLayout: "main",
      helpers: {
         multiply: (a, b) => a * b,
         cartTotal: (products) =>
            products.reduce((sum, p) => sum + p.product.price * p.quantity, 0),
         json: (context) => JSON.stringify(context)
      }
   })
)
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname, "views"))

app.use(cookieParser(process.env.JWT_SECRET))

// para formularios POST en Frontend
app.use(express.urlencoded({ extended: true }))

// Servir archivos estáticos (como JS, CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, "public")))

// middleware para poder trabajar con datos JSON
app.use(express.json())

initializePassport()

// Inicializa Passport en cada request
app.use(passport.initialize())
// NO USAR es de express session no se usa con JWT!!!! app.use(passport.session())

const connectAtlasMongoDB = async () => {
   try {
      const url = process.env.ATLAS_URL
      await mongoose.connect(url)
      console.log(`Conectado a Mongo Atlas`)
   } catch (err) {
      console.error(`Error conectando a MongoDB: ${err}`)
      process.exit(1)
   }
}

async function startServer() {
   try {
      await connectAtlasMongoDB()
      // rutas
      app.use("/api/users", apiUsers)
      app.use("/users", users)
      app.use("/views", views)

      app.listen(PORT, () =>
         console.log(`Tortas Mariluz http://localhost:${PORT}`)
      )
   } catch (err) {
      console.error(`Error conectando a MongoDB: ${err}`)
   }
}

startServer()
