import express from "express"
import session from "express-session"
import mongoose from 'mongoose'

// routes
import productsRouter from "./routes/products.route.js"
import cartsRouter from "./routes/carts.route.js"
import viewsRouter from "./routes/views.route.js"

// express-handlebars
import handlebars from "express-handlebars"
import path from "path"
import { fileURLToPath } from "url"

// socket io
import { Server } from "socket.io"
import http from "http"

// filename toma el directorio del archivo ej: C:\Entrega2\src\app.js
// dirname toma la carpeta del directorio del archivo ej: C:\proyectos\miapp\src
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// servidor express
const app = express()
const server = http.createServer(app)
export const io = new Server(server)
const PORT = 8080
const URL = "mongodb+srv://valderramaCesar_db:Valde$.88@cluster0.o1b7cwr.mongodb.net/MongoCart?appName=Cluster0"

// Configuración de Handlebars
app.engine(
   "handlebars",
   handlebars.engine({
      defaultLayout: "main",
      helpers: {
         multiply: (a, b) => a * b,
         cartTotal: (products) =>
            products.reduce((sum, p) => sum + p.product.price * p.quantity, 0),

         // 👉 Helper para convertir variables a JSON usable en el frontend
         json: (context) => JSON.stringify(context)
      }
   })
)

// Session-Express
app.use(session({
   secret: "debeSerUnaPalabraLargaParaMayorCifrado",
   resave: false,
   saveUninitialized: true
}))

app.set("view engine", "handlebars") // define qué motor usar, en este caso handlebars
app.set("views", path.join(__dirname, "views")) // define dónde están las vistas

// Servir archivos estáticos (como JS, CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, "public")))

// middleware para poder trabajar con datos JSON
app.use(express.json())

async function connectMongoose() {
   try {
      await mongoose.connect(URL)
      console.log("Conectado a MongoDB");
   } catch (error) {
      console.error(`Error conectando a MongoDB: ${error}`);
   }
}
connectMongoose()

// iniciar el servidor
server.listen(PORT, () => {
   console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})

// ruta principal
app.get("/", auth, (req, res) => {
   res.send("Bienvenido a MongoCart!")
})

// rutas /api/products
app.use("/api/products", productsRouter)

// rutas /api/carts
app.use("/api/carts", cartsRouter)

// renderiza los productos
app.use("/products", viewsRouter)

// Middleware de auth
export function auth(req, res, next) {
   // si no hay usuario registrado (cookie)
   if (!req.session?.user) {
      return res.status(401).send("Debes iniciar sesión!")
   }

   // Si es admin
   if (req.session.user === "coder" && req.session.admin) {
      return next()
   }

   // Si es usuario normal
   if (req.session.user === "cesar") {
      return next()
   }

   return res.status(403).send("No autorizado")
}