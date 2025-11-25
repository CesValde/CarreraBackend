import express from 'express'
import { ProductManager } from './ProductManager.js'

// routes
import realTimeProducts from './routes/views.route.js'
import productsRoute from './routes/products.route.js'
import cartsRoute from './routes/carts.route.js'

// express-handlebars
import handlebars from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url'

// socket io
import { Server } from 'socket.io'
import http from 'http'

// filename toma el directorio del archivo ej: C:\Entrega2\src\app.js
// dirname toma la carpeta del directorio del archivo ej: C:\proyectos\miapp\src
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// servidor express
const app = express()
const server = http.createServer(app)
export const io = new Server(server)
const PORT = 8080 

// Configuración de Handlebars
app.engine('handlebars', handlebars.engine())       // define cómo procesar los .handlebars
app.set('view engine', 'handlebars')                // define qué motor usar, en este caso handlebars
app.set('views', path.join(__dirname, 'views'))     // define dónde están las vistas

// Servir archivos estáticos (como JS, CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')))

// Manejo de ProductManager
const pathProduct = path.join(__dirname, 'json', 'products.json')
const productManager = new ProductManager(pathProduct)

// middleware para poder trabajar con datos JSON
app.use(express.json())

// iniciar el servidor 
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})

// ruta principal 
app.get('/', (req, res) => {
    res.send("Bienvenido!")
})

// rutas /api/products
app.use('/api/products', productsRoute)
// rutas /api/carts
app.use('/api/carts', cartsRoute)
// renderiza los productos en tiempo real
app.use('/realtimeproducts', realTimeProducts)

io.on('connection', (socket) => {
    // emitir la coleccion de productos a todos los sockets
    const products = productManager.getProducts()
    socket.emit('lista_productos', products)
})