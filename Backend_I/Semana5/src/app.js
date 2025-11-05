import express from 'express'
import UserRoute from './routes/user.route.js'
import PetsRoute from './routes/pets.route.js'
import ViewRoutes from './routes/view.route.js'
import path from 'path'
import { fileURLToPath } from 'url'
import handlebars from 'express-handlebars'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

// Configuración de Handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars')

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

// Rutas -> estas son POST
app.use('/api/user', UserRoute)
app.use('/api/pets', PetsRoute)

// renderizar desde view.routes -> notas de cada user
app.use('/perfil', ViewRoutes)

app.listen(8080, () => {
   console.log("Server ON")
})