import 'dotenv/config'

import express from "express"
import session from "express-session"
import mongoose from 'mongoose'
import MongoStore from 'connect-mongo'

import homeRouter from "./routes/home.route.js"
import profileRouter from "./routes/profile.route.js"
import userRouter from "./routes/user.route.js"
import productsRouter from "./routes/products.route.js"
import cartsRouter from "./routes/carts.route.js"
import viewsRouter from "./routes/views.route.js"

import handlebars from "express-handlebars"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 8080
const MongoAtlas = process.env.MONGO_ATLAS_URL
/* const MongoDB = process.env.MONGODB */

// Handlebars
app.engine("handlebars", handlebars.engine({
   defaultLayout: "main",
   helpers: {
      multiply: (a, b) => a * b,
      cartTotal: (products) =>
         products.reduce((sum, p) => sum + p.product.price * p.quantity, 0),
      json: (context) => JSON.stringify(context)
   }
}))
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())

async function startServer() {
   try {

      await mongoose.connect(MongoAtlas)
      console.log("Conectado a Mongo Atlas")

      app.use(session({
         secret: process.env.SESSION_SECRET,
         resave: false,
         saveUninitialized: true,
         store: MongoStore.create({
            mongoUrl: MongoAtlas,
            ttl: 60 * 60
         }),
         cookie: {
            maxAge: 1 * 60 * 60 * 1000, // 1hr
            httpOnly: true,
            signed: true,

            secure: false,       // 🔹 importante para localhost
            sameSite: 'lax'      // 🔹 recomendable en localhost
         }
      }))

      app.use("/", homeRouter)
      app.use("/api/products", productsRouter)
      app.use("/api/carts", cartsRouter)
      app.use("/auth", userRouter)
      app.use("/profile", profileRouter)
      app.use("/products", viewsRouter)

      app.listen(PORT, () => {
         console.log(`Servidor corriendo en http://localhost:${PORT}`)
      })

   } catch (error) {
      console.error("Error iniciando el servidor:", error)
   }
}

await startServer()