import dotenv from "dotenv"
dotenv.config()

import express from "express"
import session from "express-session"
import MongoStore from "connect-mongo"
import cookieParser from "cookie-parser"

import homeRouter from "./routes/home.route.js"
import profileRouter from "./routes/profile.route.js"
/* import userRouter from "./routes/user.route.js" */
import productsRouter from "./routes/products.route.js"
import cartsRouter from "./routes/carts.route.js"
import viewsRouter from "./routes/views.route.js"
import authRouter from "./routes/auth.route.js"

import handlebars from "express-handlebars"
import path from "path"
import { fileURLToPath } from "url"

import { connectAtlasMongoDB } from "./config/db/connect.config.js"
import { initPassport } from "./config/auth/passport.config.js"
import passport from "passport"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT
const secret = process.env.SESSION_SECRET

// Handlebars
app.engine(
   "handlebars",
   handlebars.engine({
      defaultLayout: "main",
      helpers: {
         multiply: (a, b) => a * b,
         cartTotal: (products) =>
            products.reduce((sum, p) => sum + p.product.price * p.quantity, 0),
         json: (context) => JSON.stringify(context),
      },
   })
)
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(cookieParser(secret))

// levantar el servidor
async function startServer() {
   try {
      await connectAtlasMongoDB()

      const store = MongoStore.create({
         client: (await import("mongoose")).default.connection.getClient(),
         ttl: 60 * 60,
      })

      app.use(
         session({
            secret: secret || "debeSerUnaPalabraLargaParaMayorCifrado",
            resave: false,
            saveUninitialized: false,
            store,
            cookie: {
               maxAge: 1 * 60 * 60 * 1000, // 1hr
               httpOnly: true,
               signed: true,
            },
         })
      )

      initPassport()
      app.use(passport.initialize())
      app.use(passport.session())

      app.use("/", homeRouter)
      app.use("/api/products", productsRouter)
      app.use("/api/carts", cartsRouter)
      /* app.use("/user", userRouter) */
      app.use("/auth", authRouter)
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
