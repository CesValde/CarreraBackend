import express from 'express'
import UserRoute from './routes/user.route.js'
import PetsRoute from './routes/pets.route.js'
import ViewRoutes from './routes/view.route.js'
import path from 'path'
import { fileURLToPath } from 'url'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'

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

// renderizar desde view.routes -> renderiza el chat
app.use('/chat', ViewRoutes)

// ----------------------- nuevo 

const serverHttp = app.listen(8080, () => {
   console.log("Server ON")
})

const serverSocket = new Server(serverHttp)
const BBDD = [];
const usuarios = {}

// cada socket es un nueva pestaña que ingresa al endpoint
serverSocket.on('connection', (socket) => {
   // recibimos el nombre del usuario al conectarse
   socket.on('registrar_usuario', (user) => {
      usuarios[socket.id] = user
      console.log(`${user} se conectó con id ${socket.id}`)

      // emitimos la lista de mensajes actualizada al socket que ingresa
      socket.emit('lista_de_mensaje_actualizada',BBDD)

      // actualiza en todas las ventanas
      socket.emit('estado_del_usuario', usuarios)
   })

   socket.on('mensaje', (payload) => { // payload -> {user, mensaje}
      BBDD.push(payload)
      serverSocket.emit('lista_de_mensaje_actualizada', BBDD)

      // lista de usuarios
      serverSocket.emit('estado_del_usuario', usuarios)
   })

   // detecta cuando el socket se desconecta, reason lo maneja io por si solo (no le doy valor)
   socket.on('disconnect', (reason) => {
      console.log(`${socket.id} se desconecto ${reason}`)

      // emitimos que id que se desconecto
      serverSocket.emit('usuario_desconectado', socket.id)
   })
})

/* 

--- MEJORA ---

1. PASAR DE VARIABLE A ARCHIVOS! 

2. EL usuario que envia un chat debera de identificarse 
visualmente en su pantalla como el prefijo "Yo:" ✅
3. No mostrar el chat hasta que se identifique el usuario Mostrar mensaje de bienvenida + username ✅

// PARA RECOMENDACION DALEEEE

1.   Mostrar usuarios conectados ✅
2.   Identificar con verde para conectados, rojo para los que ya no estan. ✅
3.   Roles - Admin, invitado, premium, basico, top 3 donares.
4.   Permitir emojis a usuarios premium

*/