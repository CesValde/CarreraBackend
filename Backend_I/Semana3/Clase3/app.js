/*
    Se creará una clase “UsersManager” que permitirá guardar usuarios en un atributo estático. 
    El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. 
    Utilizar el módulo nativo crypto.
    El manager debe contar con los siguientes métodos:
*/
/*
    El método “Crear usuario” debe recibir un objeto con los campos:
    Nombre
    Apellido
    Nombre de usuario
    Contraseña

    El método debe guardar un usuario en un atributo estático llamado 'bbdd', 
    recordando que la contraseña debe estar hasheada por seguridad
    El método “Mostrar Usuarios” imprimirá en consola todos los usuarios almacenados.
    El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la contraseña.
*/
/*
    debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, 
    Si coinciden el usuario y la contraseña, devolver un mensaje “Logueado”, caso contrario indicar error si el usuario no existe, o si la contraseña no coincide.
*/

// import para encriptar la contraseña 
import bcrypt from 'bcrypt';
// file system
import fs from 'fs'
import { use } from 'react';

// encripta la contraseña
function createHash(password) {
    const hashingString = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    console.log(password, '-->', hashingString)
    return hashingString
}

// verifica que el texto plano sea igual a la contraseña encriptada
function isValidPassword(password, usernamePassowrd){
    return bcrypt.compareSync(password, usernamePassowrd)
}

// buscar un usuario dentro de la bbdd
function buscarUsuario(bbdd, username) {
    return bbdd.find(usuario => usuario.username === username)
}

class UsersManager {
    static bbdd

    // para leer solo una vez al principio la bbdd
    static getInstance() {
        // verifica si existe el archivo
        if(fs.existsSync('./bbdd.json')) {
            // convierto a objeto JS
            return this.bbdd = JSON.parse(fs.readFileSync('./bbdd.json'))
        } else {
            this.bbdd = { data: [] }
            fs.writeFileSync('./bbdd.json', JSON.stringify({ data: [] }))
            return this.bbdd
        }
    }

    // crea un usuario
    static createUser({ name, lastName, username, password }) {
        this.bbdd.push({
            name,
            lastName,
            username,
            password: createHash(password)
        })
        fs.writeFileSync('./bbdd.json', JSON.stringify(this.bbdd))
    }

    // modifica la contraseña de un usuario
    static modificarUsuario({username, newPassword}){
        const userFinded = buscarUsuario(this.bbdd, username)
        if(!userFinded) return console.log("El usuario no existe")

        userFinded.password = newPassword
        fs.writeFileSync('./bbdd.json', JSON.stringify(this.bbdd))
    }

    // elimina un usuario
    static eliminarUsuario (username){
        const userFinded = buscarUsuario(this.bbdd, username)
        if(!userFinded) return console.log("El usuario no existe")

        this.bbdd = this.bbdd.filter(usuarioFinded => usuarioFinded.username !== username)
        fs.writeFileSync('./bbdd.json', JSON.stringify(this.bbdd))
    }

    // valida un usuario 
    static validarUsuario(username, password) {
        const userFinded = buscarUsuario(this.bbdd, username)
        if(!userFinded) return console.log("El usuario no existe")
        
        const isValid = isValidPassword(password, userFinded.password)
        if(!isValid) return console.log("Contraseña incorrecta")

        console.log(`Bienvenido, ${userFinded.name}`)
    }

    // muestra los usuarios
    static mostrarUsuarios() {
        console.log(this.bbdd)
    }
}

const bbdd = UsersManager.getInstance()
console.log(bbdd)

/* UsersManager.mostrarUsuarios() */

// UsersManager.crearUsuario({nombre: "pedro", apellido: "gonzalez", username: "rodo123", password: "coder2025"})
// console.log(UsersManager.bbdd)

// UsersManager.validarUsuario('rodo122','coder2025') 
// UsersManager.validarUsuario('rodo123','coder2023') 
// UsersManager.validarUsuario('rodo123','coder2025') 