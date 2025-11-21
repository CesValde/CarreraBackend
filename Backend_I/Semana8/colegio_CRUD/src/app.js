import express from 'express'
import mongoose from 'mongoose'
import { router } from './routes/student.router.js'
const app = express()

// middleware para poder trabajar con datos JSON
app.use(express.json())

app.listen(8080, () => {
   console.log("App On")
})

const URL = 'mongodb+srv://valderramaCesar_db:Valde$.88@cluster0.o1b7cwr.mongodb.net/Colegio?appName=Cluster0'

async function connectMongoose() {
   try {
      await mongoose.connect(URL)
      console.log("Conectado a MongoDB");
   } catch(error) {
      console.error(`Error conectando a MongoDB: ${error}`);
   }
}
connectMongoose()

// ruta principal 
app.get('/', (req, res) => {
    res.send("Bienvenido!")
})

/* 'Todas las rutas que estén dentro de router van a responder cuando el path empiece con /api/student.' */
app.use('/api/student', router)