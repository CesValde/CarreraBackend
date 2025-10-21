/* const { json } = require('body-parser') */
const express = require('express')
const app = express()
const PORT = 8080 

// middleware para poder trabajar con datos JSON
app.use(express.json())

let usuarios = []

// metodo GET
/* 
    Desde 'postman' hacemos el GET ej:
    localhost8080/usuarios
*/
app.get("/usuarios", (req, res) => {
    res.json(usuarios)
})

// metodo POST
/* 
    Desde 'postman' hacemos el POST ej:
    localhost8080/usuarios
    { "nombre": {{randomFirstName}}}, "edad": 20 }
    { "nombre": 'Cesar', "edad": 20 }
*/
app.post("/usuarios", (req, res) => {
   const { nombre, edad } = req.body
   const nuevoUsuario = { id: usuarios.length + 1, nombre, edad}
   usuarios.push(nuevoUsuario)
   res.status(201).json(nuevoUsuario)
})  

// metodo PUT
/* 
    Desde 'postman' hacemos el PUT ej:
    el endpoint debe apuntar con el id del usuario a modificar ej:
    localhost8080/usuarios/1
    { "nombre": "NuevoNombre", "edad": 20 }
*/
app.put("/usuarios/:id", (req, res) => {
    const { id } = req.params
    const { nombre, edad } = req.body
    const usuario = usuarios.find(u => u.id === parseInt(id))
    if(!usuario) return res.status(404).json({mensaje : "Usuario no encontrado"})

        // actualizar datos del usuario
        usuario.nombre = nombre || usuario.nombre
        usuario.edad = edad || usuario.edad
        res.json(usuario)
})

// metodo DELETE
/* 
    Desde 'postman' hacemos el PUT ej:
    el endpoint debe apuntar con el id del usuario a eliminar ej:
    localhost8080/usuarios/1
*/
app.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params
    usuarios = usuarios.filter(u => u.id !== parseInt(id))
    res.json({mensaje: "Usuario eliminado"})
})

// iniciar el servidor 
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})